$(document).ready(function(){
  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="reviews__button  reviews__button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="reviews__button  reviews__button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
