const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 600}px)`;
  slideNumber++;
};
const previousSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber-2) * 600}px)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1)*600}px)`;
  slideNumber = length;
};

right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
});
left.addEventListener("click", () => {
    slideNumber > 1 ? previousSlide() : getLastSlide();
});

const bottom = document.querySelector('.bottom')

for(let i=0; i<length; i++){
    const div = document.createElement('div');
    div.className = "btn"
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.btn')
buttons[0].style.backgroundColor = 'white';
