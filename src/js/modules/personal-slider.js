


// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, Autoplay, EffectFade } from "swiper";

Swiper.use([Navigation, EffectFade]);

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
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // показ кол-ва слайдов (работает, когда откл effect: "fade")
  // slidesPerView: 3.6,
  // расстояние между слайдами
  
  // spaceBetween: gap, // свой размер
  // spaceBetween: 40,

  //отложенная загрузка:
  //отключаем презагрузку картинок
  lazy: true,
  // preloadImages: false,
  // lazy: {
  //   loadOnTransitionStart: false,
  //   loadPrevNext: false,
  // },
});
//----- END
