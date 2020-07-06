import Swiper from 'swiper';
export default async () => {
  const slider = document.querySelector(".swiper-container");
  let mySwiper = new Swiper(slider, {
    speed: 400,

    slidesPerView: 4,
    spaceBetween: 20,
    preloadImages: false,
    initialSlide: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      300: {
        slidesPerView: 1,

      },
      420: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      670: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });


};