/* 
    This File is the base for mapping the auto complete, For CVC purposes this files auto complete will be limited in the number of QtQuick Objects but 
    detailed in the properties
*/

var isInitialized = false
var editor = null
var qtSuggestions = null;
var qtSearch = null;
var qtProperties = null;
var qtIds = null;

var qtQuickModel = null;
/*
    This the global registration for the monaco editor this creates the syntax and linguistics of the qml language, as well as defining the theme of the qml language
*/
function registerQmlProvider() {

    // This creates the suggestions widgets and suggestion items, returning the determined suggestions, reads the files ids, updates editor settings per initial conditions
    function runQmlProvider() {
        monaco.languages.registerCompletionItemProvider('qml', {
            triggerCharacters: ['.', ':', '\v'],
            provideCompletionItems: (model, position) => {
                qtSearch.update(model)
                qtSuggestions.update(position)
                return { suggestions: qtSuggestions.suggestions }
            }
        })
    }

    runQmlProvider()

    // Component did mount and update
    editor.getModel().onDidChangeContent((event) => {
        window.link.fileText = editor.getValue();
        window.link.setVersionId(editor.getModel().getAlternativeVersionId());
        const model = editor.getModel()
        // Mount
        if(!isInitialized){
            qtSearch.update(model)
            isInitialized = true
        }
    })

    // Component will unmount
    editor.getModel().onWillDispose(() => {
        editor.dispose()
    })
}

// Initialize
function initEditor() {
    monaco.editor.defineTheme('qmlTheme', {
        base: 'vs',
        inherit: false,
        rules: [
            { token: "comment", foreground: "#32C132" },
            { token: "delimiter.bracket", foreground: "#000000" },
            { token: "keyword", foreground: "#829356" },
            { token: "type.identifier", foreground: "#DF00FF" },
            { token: "string", foreground: "#32C132" },
            { token: "property.defs", foreground: "#BA262B" },
            { token: "type.id", fontStyle: 'italic' },
            { token: "string.escape.invalid", foreground: "#FF0000", fontStyle: 'italic underline' },
            { token: "regexp.invalid", foreground: "#FF0000", fontStyle: 'italic underline' },
            { token: "string.invalid", foreground: "#FF0000", fontStyle: 'italic underline' },
            { token: "regexp.escape.control", foreground: "#FF0000", fontStyle: 'italic' },
            { token: "regexp", foreground: "#FF0000", fontStyle: 'italic' },
            { token: "delimiter.bracket.error", foreground: "#FF0000" }
        ]
    })

    editor = monaco.editor.create(document.getElementById('container'), {
        value: "",
        language: "qml",
        theme: 'qmlTheme',
        formatOnPaste: true,
        formatOnType: true,
        formatOnSave: true,
        autoIndent: 'full',
        scrollbar: {
            useShadows: false,
            vertical: 'visible',
            horizontal: 'visible',
            horizontalScrollbarSize: 15,
            verticalScrollbarSize: 15,
        }
    });

    editor.addAction({
        id: 'commentSelection',
        label: "Comment selection",
        contextMenuGroupId: "navigation",
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.US_SLASH],
        run: (editor) => {
            editor.getAction('editor.action.commentLine').run()
        }
    })

    // base class
    qtQuickModel = new QtQuickModel()
    qtSearch = new QtSearch()
    qtSuggestions = new QtSuggestions()
}