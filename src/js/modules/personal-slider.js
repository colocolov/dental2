// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, Autoplay, EffectFade } from "swiper";

Swiper.use([Navigation, EffectFade]);


if (_vars.personalSliderEl) {

  // слайдер на главной
  new Swiper(_vars.personalSliderEl, {
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    //скорость переключения слайдов
    speed: 800,
    // навигация по стрелкам
    navigation: {
      nextEl: ".personal--next",
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
    spaceBetween: 10,
    // кол-во пролистываемых слайдов
    slidesPerGroup: 1,
    // стартовый слайд
    initialSlide: 0,
    // активный слайд по центру
    centeredSlides: true,
    
    breakpoints: {
      // when window width is >= 320px
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
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
