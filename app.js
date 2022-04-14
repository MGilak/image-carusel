const myImages = [
  { url: "https://loremflickr.com/1040/480/car" },
  { url: "https://loremflickr.com/1040/480/cat" },
  { url: "https://loremflickr.com/1040/480/happy" },
  { url: "https://loremflickr.com/1040/480/sad" },
  { url: "https://loremflickr.com/1040/480/boy" },
  { url: "https://loremflickr.com/1040/480/car" },
];

const slides = document.querySelector(".slides");
const inDots = document.querySelector(".inDots");
const next = document.querySelector(".fa-angle-right");
const left = document.querySelector(".fa-angle-left");

let slideList = [];
let dots = [];
let counter = 1;
let auto = {};
let delay = 4000;

// Move photos

next.addEventListener("click", () => {
  counter++;
  showImages();
  resetInterval();
});

left.addEventListener("click", () => {
  counter--;
  showImages();
  resetInterval();
});

window.addEventListener("DOMContentLoaded", startSetup);

// create html for images and dots

function startSetup() {
  myImages.forEach((img, index) => {
    const conCard = document.createElement("div");
    conCard.classList.add("slides");
    conCard.innerHTML = `
    <img src=${img.url} alt="#" />
    `;
    slides.append(conCard);
    slideList.push(conCard);

    const dot = document.createElement("span");
    dot.classList.add("spanDot");
    dot.addEventListener("click", () => {
      counter = index;
      showImages();
      resetInterval();
    });

    inDots.append(dot);
    dots.push(dot);
  });
  showImages();
  auto = setInterval(upateSlide, delay);
}

// update slides

function upateSlide() {
  counter++;
  showImages();
}

// show images

function showImages() {
  if (counter < 0) {
    counter = slideList.length - 1;
  }
  if (counter >= slideList.length) {
    counter = 0;
  }

  slideList.forEach((slide) => {
    slide.style.display = "none";
  });
  slideList[counter].style.display = "block";

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[counter].classList.add("active");
}

// reset interval

function resetInterval() {
  clearInterval(auto);
  auto = setInterval(upateSlide, delay);
}


