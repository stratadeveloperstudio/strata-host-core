import QtQuick 2.0

Item {
//    id: demopattern

    function demo_star1(led_state){
        if (led_state === 1){
            sgStatusLight11.status = "green"
        } else if (led_state === 2) {
            sgStatusLight12.status = "green"
            sgStatusLight21.status = "green"
        } else if (led_state === 3) {
            sgStatusLight13.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight31.status = "green"
        } else if (led_state === 4) {
            sgStatusLight14.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight31.status = "off"
            sgStatusLight32.status = "green"
        } else if (led_state === 5) {
            sgStatusLight15.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight33.status = "green"
        } else if (led_state === 6) {
            sgStatusLight16.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight34.status = "green"
        } else if (led_state === 7) {
            sgStatusLight17.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight35.status = "green"
        } else if (led_state === 8) {
            sgStatusLight18.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight36.status = "green"
        } else if (led_state === 9) {
            sgStatusLight19.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight37.status = "green"
        } else if (led_state === 10) {
            sgStatusLight1A.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight38.status = "green"
        } else if (led_state === 11) {
            sgStatusLight1B.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight39.status = "green"
        } else if (led_state === 12) {
            sgStatusLight1C.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight3A.status = "green"
        } else if (led_state === 13) {
            sgStatusLight2C.status = "green"
            sgStatusLight3B.status = "green"
        } else if (led_state === 14) {
            sgStatusLight3C.status = "green"
        } else {
            led_all_off()
        }
    }

    function demo_star2(led_state){
        if (led_state === 1){
            sgStatusLight11.status = "green"
        } else if (led_state === 2) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight21.status = "green"
        } else if (led_state === 3) {
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight31.status = "green"
        } else if (led_state === 4) {
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
        } else if (led_state === 5) {
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
        } else if (led_state === 6) {
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
        } else if (led_state === 7) {
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight35.status = "green"
        } else if (led_state === 8) {
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
        } else if (led_state === 9) {
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
        } else if (led_state === 10) {
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
        } else if (led_state === 11) {
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
        } else if (led_state === 12) {
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
        } else if (led_state === 13) {
            sgStatusLight1C.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
        } else if (led_state === 14) {
            sgStatusLight2C.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 15) {
            sgStatusLight3C.status = "green"
        } else {
            led_all_off()
        }
    }

    function demo_star3(led_state){
         if (led_state === 1){
            sgStatusLight11.status = "green"
        } else if (led_state === 2) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight21.status = "green"
        } else if (led_state === 3) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight31.status = "green"
        } else if (led_state === 4) {
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
        } else if (led_state === 5) {
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
        } else if (led_state === 6) {
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
        } else if (led_state === 7) {
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight35.status = "green"
        } else if (led_state === 8) {
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
        } else if (led_state === 9) {
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
        } else if (led_state === 10) {
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
        } else if (led_state === 11) {
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
        } else if (led_state === 12) {
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
        } else if (led_state === 13) {
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
        } else if (led_state === 14) {
            sgStatusLight1C.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 15) {
            sgStatusLight2C.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 16) {
            sgStatusLight3C.status = "green"
        } else {
             led_all_off()
        }
    }

    function demo_star4(led_state){
        if (led_state === 1){
            sgStatusLight11.status = "green"
        } else if (led_state === 2) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight21.status = "green"
        } else if (led_state === 3) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight31.status = "green"
        } else if (led_state === 4) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
        } else if (led_state === 5) {
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
        } else if (led_state === 6) {
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
        } else if (led_state === 7) {
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight34.status = "green"
        } else if (led_state === 8) {
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
        } else if (led_state === 9) {
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
        } else if (led_state === 10) {
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
        } else if (led_state === 11) {
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
        } else if (led_state === 12) {
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
        } else if (led_state === 13) {
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
        } else if (led_state === 14) {
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 15) {
            sgStatusLight1C.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 16) {
            sgStatusLight2C.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 17) {
            sgStatusLight3C.status = "green"
        } else {
            led_all_off()
        }
    }

    function demo_star5(led_state){
        if (led_state === 1){
            sgStatusLight11.status = "green"
        } else if (led_state === 2) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight21.status = "green"
        } else if (led_state === 3) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight31.status = "green"
        } else if (led_state === 4) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
        } else if (led_state === 5) {
            sgStatusLight11.status = "green"
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
        } else if (led_state === 6) {
            sgStatusLight12.status = "green"
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight21.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
        } else if (led_state === 7) {
            sgStatusLight13.status = "green"
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight22.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight31.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight35.status = "green"
        } else if (led_state === 8) {
            sgStatusLight14.status = "green"
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight23.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight32.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
        } else if (led_state === 9) {
            sgStatusLight15.status = "green"
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight24.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight33.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
        } else if (led_state === 10) {
            sgStatusLight16.status = "green"
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight25.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight34.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
        } else if (led_state === 11) {
            sgStatusLight17.status = "green"
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight26.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight35.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
        } else if (led_state === 12) {
            sgStatusLight18.status = "green"
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight27.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight36.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
        } else if (led_state === 13) {
            sgStatusLight19.status = "green"
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight28.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight37.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
        } else if (led_state === 14) {
            sgStatusLight1A.status = "green"
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight29.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight38.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 15) {
            sgStatusLight1B.status = "green"
            sgStatusLight1C.status = "green"
            sgStatusLight2A.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight39.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 16) {
            sgStatusLight1C.status = "green"
            sgStatusLight2B.status = "green"
            sgStatusLight2C.status = "green"
            sgStatusLight3A.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 17) {
            sgStatusLight2C.status = "green"
            sgStatusLight3B.status = "green"
            sgStatusLight3C.status = "green"
        } else if (led_state === 18) {
            sgStatusLight3C.status = "green"
        } else {
            led_all_off()
        }
    }

    function led_all_off(){
        sgStatusLight11.status = "off"
        sgStatusLight12.status = "off"
        sgStatusLight13.status = "off"
        sgStatusLight14.status = "off"
        sgStatusLight15.status = "off"
        sgStatusLight16.status = "off"
        sgStatusLight17.status = "off"
        sgStatusLight18.status = "off"
        sgStatusLight19.status = "off"
        sgStatusLight1A.status = "off"
        sgStatusLight1B.status = "off"
        sgStatusLight1C.status = "off"

        sgStatusLight21.status = "off"
        sgStatusLight22.status = "off"
        sgStatusLight23.status = "off"
        sgStatusLight24.status = "off"
        sgStatusLight25.status = "off"
        sgStatusLight26.status = "off"
        sgStatusLight27.status = "off"
        sgStatusLight28.status = "off"
        sgStatusLight29.status = "off"
        sgStatusLight2A.status = "off"
        sgStatusLight2B.status = "off"
        sgStatusLight2C.status = "off"
        sgStatusLight21.status = "off"
        sgStatusLight22.status = "off"
        sgStatusLight23.status = "off"
        sgStatusLight23.status = "off"

        sgStatusLight31.status = "off"
        sgStatusLight32.status = "off"
        sgStatusLight33.status = "off"
        sgStatusLight34.status = "off"
        sgStatusLight35.status = "off"
        sgStatusLight36.status = "off"
        sgStatusLight37.status = "off"
        sgStatusLight38.status = "off"
        sgStatusLight39.status = "off"
        sgStatusLight3A.status = "off"
        sgStatusLight3B.status = "off"
        sgStatusLight3C.status = "off"
        sgStatusLight31.status = "off"
        sgStatusLight32.status = "off"
        sgStatusLight33.status = "off"
        sgStatusLight33.status = "off"

    }
}
