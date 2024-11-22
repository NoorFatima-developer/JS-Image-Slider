const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

let slideNumber = 1;
right.addEventListener('click', ()=>{
    // console.log("Hello");
    slider.style.transform = `translateX(-${slideNumber*600}px)`;
    slideNumber++;
})