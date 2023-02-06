function initSwiper() {
    const swiperEl = document.querySelector('swiper-container');
    const swiperParams = {
      slidesPerView: 2,
      grid: {
        rows: 3,
      },
      spaceBetween: 20,

      breakpoints: {
        1024: {
          slidesPerView: 5,
          grid: {
            rows: 1,
          },

        },
      },
      on: {
        init() {
          // ...
        },
      },
    };
  
    Object.assign(swiperEl, swiperParams);
  
    swiperEl.initialize();

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click',function() {
        swiperEl.swiper.slidePrev();
    })

    nextBtn.addEventListener('click',function() {
        swiperEl.swiper.slideNext();
    })
}


window.addEventListener('load',initSwiper)