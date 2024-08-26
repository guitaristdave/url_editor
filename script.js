let link = document.querySelector('#link');
let button = document.querySelector('#link_btn');
let edited = document.querySelector('#edited');
let editedText = document.querySelector('.edited_text');
let err = document.querySelector("#error");


button.addEventListener('click', () => {
    if (link.value == '') {
        return;
    }
    let text = link.value.replace(/\\/g, '');
    link.value = '';
    edited.textContent = text;
    editedText.classList.remove('hidden');
})

