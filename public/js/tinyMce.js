tinymce.init({
    language: 'pt-BR',
    selector: ".article",
    setup: function (editor) {
        editor.on("blur", function (e) {
            const text = e.target.dom.doc.body.innerText.trim()
            const tinyText = document.querySelector('.tox-tinymce')

            if (text == '') {
                    tinyText.style.border = "1px solid red"
                    tinyText.classList.add('error')
                    verify(text)
            } else {
                    tinyText.style.border = "1px solid #ccc"
                    tinyText.classList.remove('error')
                    verify(text)
            }
        });
    }
})
