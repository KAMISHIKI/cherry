function countGrapheme(string) {
    const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
    return [...segmenter.segment(string)].length;
}

var quill = new Quill('#editor-container', {
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', { header: 1 }, 'image', 'code-block', { list: 'ordered' }, { list: 'check' }],
        ]
    },
    // placeholder: '本文',
    theme: 'snow'
})

quill.on('text-change', function (delta, oldDelta, source) {
    document.getElementById('textCounter').innerHTML = quill.getText().length - 1
});
new QuillMarkdown(quill)

