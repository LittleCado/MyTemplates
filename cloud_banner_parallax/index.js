const text = document.querySelector('#text');

window.addEventListener('scroll', () => {
    text.style.marginBottom = window.scrollY + 'px'
})