let link = document.querySelector('#link');
let button = document.querySelector('#link_btn');
let edited = document.querySelector('#edited');
let editedText = document.querySelector('.edited_text');
let err = document.querySelector("#error");
let copyBtn = document.querySelector('#copy')
let goBtn = document.querySelector('#go')


button.addEventListener('click', () => {
    if (link.value == '') {
        return;
    }
    let text = link.value.replace(/\\/g, '');
    link.value = '';
    edited.textContent = text;
    editedText.classList.remove('hidden');
    copyBtn.classList.remove('hidden')
    goBtn.classList.remove('hidden')
    goBtn.href = text
})



copyBtn.addEventListener('click', () => {
    const text = edited.textContent
    navigator.clipboard.writeText(text)
})