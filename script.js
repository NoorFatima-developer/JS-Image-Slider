const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.images');

let slideNumber = 1;
right.addEventListener('click', ()=>{
    if(slideNumber < images.length){
    // console.log("Hello");
    slider.style.transform = `translateX(-${slideNumber*600}px)`;
    slideNumber++;
} else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}
    
})