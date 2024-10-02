// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, Autoplay } from "swiper";

Swiper.use([Navigation, Autoplay]);


if (_vars.worksSliderEl) {

  // console.log('yes');
  // слайдер на главной
  new Swiper(_vars.worksSliderEl, {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    //скорость переключения слайдов
    speed: 800,
    // навигация по стрелкам
    navigation: {
      nextEl: ".works--next",
      prevEl: ".works--prev",
      // disabledClass: "stories-button__unactive",
      clickable: true,
      // для ппрвильного направления
    },
    //эффект перехода слайда (только если показ по 1-му слайду)
    // effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },


    // показ кол-ва слайдов (работает, когда откл effect: "fade")
    slidesPerView: 1.2,
    // расстояние между слайдами
    spaceBetween: 15,
    // кол-во пролистываемых слайдов
    slidesPerGroup: 1,
    // стартовый слайд
    initialSlide: 0,
    // активный слайд по центру
    // centeredSlides: true,
    
    breakpoints: {
      // when window width is >= 320px
      // 480: {
      //   slidesPerView: 1,
      // },
      576: {
        slidesPerView: 2,
      },
      768: { 
        slidesPerView: 3,
        spaceBetween: 40,
      },

    },

    //отложенная загрузка:
    //отключаем презагрузку картинок
    lazy: true,
    // preloadImages: false,
    // lazy: {
    //   loadOnTransitionStart: false,
    //   loadPrevNext: false,
    // },
  });
} 
//----- END
