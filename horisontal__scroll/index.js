const sections = document.querySelectorAll('section');
const content = document.querySelector('.main-content');

let spinValue = 0;
let canScroll = true;

if (window.matchMedia("(min-width: 768px)").matches) {
    /* the viewport is at least 400 pixels wide */

    window.addEventListener('wheel', (e) => {
        let delta = e.deltaY;

        if (canScroll) {
            canScroll = false;

            if (delta > 0) {
                // if scroll down
                if (spinValue < sections.length - 1) spinValue++
            } else if (delta < 0) {
                // if scroll up
                if (spinValue > 0) spinValue--
            }
            scrollContent(spinValue)
        }

        setTimeout(() => {
            canScroll = true
        }, 2000) // timeout must be the same as transition time at main-content
    })
}

function scrollContent(count) {
    content.style.cssText = `transform: translateX(-${count * 100}vw);`
}