let FIRST_SLIDE_INDEX = 0;
let LAST_SLIDE_INDEX = 2;
let CURRENT_SLIDE_INDEX = FIRST_SLIDE_INDEX;

const LOCATION_WRAPPER_CLASSNAME = '.location__wrapper';
const PREVIOUS_SLIDE_CLASSNAME = '.slide-previous';
const NEXT_SLIDE_CLASSNAME = '.slide-next';
const SLIDER_ITEM_CLASSNAME = '.slider__item';
const SLIDER_DOT_CLASSNAME = '.slider__dot';
const ACTIVE_ITEM_CLASSNAME = 'active';
const CHECKED_ITEM_CLASSNAME = 'checked';

const LOCATION_WRAPPER = document.querySelector(LOCATION_WRAPPER_CLASSNAME);
const PREVIOUS_SLIDE_BUTTON = LOCATION_WRAPPER.querySelector(
  PREVIOUS_SLIDE_CLASSNAME
);
const NEXT_SLIDE_BUTTON = LOCATION_WRAPPER.querySelector(NEXT_SLIDE_CLASSNAME);
const SLIDES = LOCATION_WRAPPER.querySelectorAll(SLIDER_ITEM_CLASSNAME);
const SLIDER_DOTS = Array.from(
  LOCATION_WRAPPER.querySelectorAll(SLIDER_DOT_CLASSNAME)
);

const hideSlide = (index) => {
  SLIDES[index].classList.remove(ACTIVE_ITEM_CLASSNAME);
  SLIDER_DOTS[index].classList.remove(CHECKED_ITEM_CLASSNAME);
};

const showSlide = (index) => {
  SLIDES[index].classList.add(ACTIVE_ITEM_CLASSNAME);
  SLIDER_DOTS[index].classList.add(CHECKED_ITEM_CLASSNAME);
};

const showPreviousSlide = () => {
  hideSlide(CURRENT_SLIDE_INDEX);
  if (CURRENT_SLIDE_INDEX == FIRST_SLIDE_INDEX) {
    CURRENT_SLIDE_INDEX = LAST_SLIDE_INDEX;
    showSlide(CURRENT_SLIDE_INDEX);
  } else {
    CURRENT_SLIDE_INDEX--;
    showSlide(CURRENT_SLIDE_INDEX);
  }
};

const showNextSlide = () => {
  hideSlide(CURRENT_SLIDE_INDEX);
  if (CURRENT_SLIDE_INDEX >= LAST_SLIDE_INDEX) {
    CURRENT_SLIDE_INDEX = FIRST_SLIDE_INDEX;
    showSlide(CURRENT_SLIDE_INDEX);
  } else {
    CURRENT_SLIDE_INDEX++;
    showSlide(CURRENT_SLIDE_INDEX);
  }
};

const showCheckedSlide = (index) => {
  hideSlide(CURRENT_SLIDE_INDEX);
  showSlide(index);
  CURRENT_SLIDE_INDEX = index;
};

PREVIOUS_SLIDE_BUTTON.addEventListener('click', showPreviousSlide);

NEXT_SLIDE_BUTTON.addEventListener('click', showNextSlide);

SLIDER_DOTS.map((dot, index) => {
  dot.addEventListener('click', () => showCheckedSlide(index));
});
