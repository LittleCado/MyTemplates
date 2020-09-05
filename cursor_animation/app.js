let mouseCursor = document.querySelector('.cursor');
let cursorTriggers = document.querySelectorAll('.wanna-cursor');

window.addEventListener('mousemove', (e) =>{
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
})

cursorTriggers.forEach(trigger => {
    trigger.addEventListener('mouseover', () => {
        mouseCursor.classList.add('grow-up');
        trigger.classList.add('cursor-on-me')
    })
    trigger.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('grow-up');
        trigger.classList.remove('cursor-on-me')
    })
})