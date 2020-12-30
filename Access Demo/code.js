var slideNumber = 0;
var slide = document.getElementsByClassName('slide');

function changeSlides(n) {
  for (var i = 0; i < slide.length; i++) {
    if (i == n) {
      slide[n].classList.add("show")
      slide[n].classList.remove("hide")
      slideNumber = n;
  } else {
      slide[i].classList.add("hide")
      slide[i].classList.remove("show")
    }
  }
  console.log(slideNumber);
}

function nextSlide() {
  slideNumber++;
    if (slideNumber >= slide.length) {
      slideNumber = 0;
    }
    changeSlides(slideNumber);
}

function prevSlide() {
  slideNumber--;
    if (slideNumber < 0) {
      slideNumber = slide.length-1;
    }
    changeSlides(slideNumber);
}
