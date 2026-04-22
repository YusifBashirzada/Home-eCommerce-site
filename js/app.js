var swiper1 = new Swiper(".mainSwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".main-next",
        prevEl: ".main-prev",
      },
      pagination: {
        el: ".main-pagination",
      },
      mousewheel: true,
      keyboard: true,
});

var swiper2  = new Swiper(".collectionSwiper", {
      spaceBetween: 30,
      slidesPerView: 1,
      pagination: {
        el: ".collection-pagination",
        clickable: true,
      },
});
