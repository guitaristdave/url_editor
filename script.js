let link = document.querySelector('#link');
let button = document.querySelector('#link_btn')
let edited = document.querySelector('#edited')
let editedText = document.querySelector('.edited_text')


button.addEventListener('click', () => {
    let text = link.value.replace(/\\/g, '');
    edited.textContent = text
    editedText.classList.remove('hidden')
})

