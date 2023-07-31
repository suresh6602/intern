// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const sticky = document.querySelector('.sticky');
    const addButton = document.querySelector('.btn-add');

    addButton.addEventListener('click', () => {
        const newsticky = sticky.cloneNode(true);
        newsticky.style.display = 'block';
        container.appendChild(newsticky);

    const noteTitleInput = newSticky.querySelector('.note-title');
    const noteDescriptionInput = newSticky.querySelector('.note-description');
    noteTitleInput.value = '';
    noteDescriptionInput.value = '';
});

});

