const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    'linear-gradient(45.34deg, #EA52F8 5.66%, #0066FF 94.35%)',
    'linear-gradient(0deg, #FF6F61 -0.04%, #FDA198 68.22%)',
    'linear-gradient(223.88deg, #FF149D 8.89%, #620F32 94.31%)'
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        console.log(coords)
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
       if(entry.isIntersecting){
           bubble.style.setProperty('left', `${directions.left}px`);
           bubble.style.setProperty('top', `${directions.top}px`);
           bubble.style.setProperty('width', `${directions.width}px`);
           bubble.style.setProperty('height', `${directions.height}px`);
           bubble.style.background = gradients[gradientIndex];
       }
    });
}

sections.forEach(section => {
    observer.observe(section);
})