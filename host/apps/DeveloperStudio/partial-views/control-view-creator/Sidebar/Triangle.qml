// From https://clogwog.net/wp/2015/02/a-simple-qml-triangle/

import QtQuick 2.12

Canvas {
      id: triangle
      antialiasing: true

      property int triangleWidth: 60
      property int triangleHeight: 60
      property color strokeStyle:  "#ffffff"
      property color fillStyle: "#ffffff"
      property int lineWidth: 0
      property bool fill: true
      property bool stroke: true
      property real alpha: 1.0

      onLineWidthChanged:requestPaint();
      onFillChanged:requestPaint();
      onStrokeChanged:requestPaint();

      onPaint: {
          var ctx = getContext("2d");
          ctx.save();
          ctx.clearRect(0,0,triangle.width, triangle.height);
          ctx.strokeStyle = triangle.strokeStyle;
          ctx.lineWidth = triangle.lineWidth
          ctx.fillStyle = triangle.fillStyle
          ctx.globalAlpha = triangle.alpha
          ctx.lineJoin = "round";
          ctx.beginPath();

          // put rectangle in the middle
          ctx.translate( (0.5 *width - 0.5*triangleWidth),
                         (0.5 * height - 0.5 * triangleHeight))

          // draw the rectangle
          ctx.moveTo(0,triangleHeight/2 ); // left point of triangle
          ctx.lineTo(triangleWidth, 0);
          ctx.lineTo(triangleWidth,triangleHeight);

          ctx.closePath();
          if (triangle.fill)
              ctx.fill();
          if (triangle.stroke)
              ctx.stroke();
          ctx.restore();
      }
}
