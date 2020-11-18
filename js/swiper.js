const swipe = document.querySelector('.swiper-container');

let swiper = new Swiper(swipe, {
 slidesPerView: 1.3,
 spaceBetween: 16,
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
 },
 breakpoints: {
  340: {
   slidesPerView: 1.5,
   spaceBetween: 20,
 },
  420: {
   slidesPerView: 1.7,
   spaceBetween: 20,
  },
  520: {
   slidesPerView: 2,
   spaceBetween: 20,
  },
 }
})
