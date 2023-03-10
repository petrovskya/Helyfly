const $SLIDER = document.querySelector('.location__wrapper');

const prevSlideBtn = $SLIDER.querySelector('.slide-prev');
const nextSlideBtn = $SLIDER.querySelector('.slide-next');
const slides = $SLIDER.querySelectorAll('.slider__item');

const sliderDots = document.querySelectorAll('.slider__dot');
let currentSlideIndex = 0;

const showPrevSlide = function () {
  hideSlide(currentSlideIndex);
  if (currentSlideIndex == 0) {
    currentSlideIndex = slides.length - 1;
    showSlide(currentSlideIndex);
  } else {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
  }
};
const nextPrevSlide = function () {
  hideSlide(currentSlideIndex);
  if (currentSlideIndex >= slides.length - 1) {
    currentSlideIndex = 0;
    showSlide(currentSlideIndex);
  } else {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
  }
};

const hideSlide = function (index) {
  slides[index].classList.remove('active');
  sliderDots[index].classList.remove('checked');
};
const showSlide = function (index) {
  slides[index].classList.add('active');
  sliderDots[index].classList.add('checked');
};

prevSlideBtn.addEventListener('click', showPrevSlide);
nextSlideBtn.addEventListener('click', nextPrevSlide);

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    hideSlide(currentSlideIndex);
    showSlide(index);
    currentSlideIndex = index;
  });
});
