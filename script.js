const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
} );

menuCloseButton.addEventListener("click" , () => menuOpenButton.click());

// swiper Initialize
const swiper = new Swiper('.slider-wrapper', {
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoint: {
    0: {

        slidePerView: 1
    },

    768: {
        slidePerView:2
    },

    1024:{
        slidePerView:3
    }

    
  }

  
});
