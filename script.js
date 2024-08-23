let link = document.querySelector('#link');
let button = document.querySelector('#link_btn')
let edited = document.querySelector('#edited')


button.addEventListener('click', () => {
    let text = link.value.replace(/\\/g, '');
    edited.textContent = text
})

