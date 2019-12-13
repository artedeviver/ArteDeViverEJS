tinymce.init({
    language: 'pt-BR',
    selector: ".article",
    setup: function (editor) {
        editor.on('click', function (e) {
            let text = e.target
            console.log(text)
            isEmpty('', text)
        });
    }
})