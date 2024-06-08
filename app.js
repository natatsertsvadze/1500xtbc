"use strict";

// sticky header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky-header-light");
  } else {
    header.classList.remove("sticky-header-light");
  }
});

// burger

const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
  if (burgerMenu.classList.contains("show")) {
    burgerMenu.style.display = "flex";
    main.style.opacity = "0.9";
    footer.style.opacity = "0.9";
  } else {
    burgerMenu.style.display = "none";
    main.style.opacity = "1";
    footer.style.opacity = "1";
  }
});

// arrow down - questions

const questionDiv = document.querySelectorAll(".question-div");

for (let i = 0; i < questionDiv.length; i++) {
  questionDiv[i].addEventListener("click", () => {
    const arrowImg = document.querySelectorAll(".arrow-image");
    const answers = document.querySelectorAll(".answer");

    questionDiv[i].classList.toggle("questionAnswered");

    if (questionDiv[i].classList.contains("questionAnswered")) {
      arrowImg[i].src = "assets/svgs/arrow-up.svg";
      answers[i].style.display = "block";

      if (i == 0) {
        arrowImg[1].src = "assets/svgs/arrow-down.svg";
        answers[1].style.display = "none";
        arrowImg[2].src = "assets/svgs/arrow-down.svg";
        answers[2].style.display = "none";
      } else if (i == 1) {
        arrowImg[0].src = "assets/svgs/arrow-down.svg";
        answers[0].style.display = "none";
        arrowImg[2].src = "assets/svgs/arrow-down.svg";
        answers[2].style.display = "none";
      } else if (i == 2) {
        arrowImg[1].src = "assets/svgs/arrow-down.svg";
        answers[1].style.display = "none";
        arrowImg[0].src = "assets/svgs/arrow-down.svg";
        answers[0].style.display = "none";
      }
    } else {
      arrowImg[i].src = "assets/svgs/arrow-down.svg";
      answers[i].style.display = "none";
    }
  });
}

// slider

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("partners-slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
