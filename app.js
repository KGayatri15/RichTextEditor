
window.addEventListener('load', () => {
    const model = new Model();
    view = new View(model, {
        'text': document.getElementById("textBox"),
        'toolbar1': document.getElementById('toolBar1'),
        'toolbar2': document.getElementById('toolBar2'),
        'button': document.getElementById('save')
    }),
        controller = new Controller(model, view);
})