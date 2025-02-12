var swiper = new Swiper(".mySwiper", {
      
      spaceBetween: 30,
      loop: true,
      

    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },

    breakPoints:{
        '480': {
            slidesperview: 1,
        },
        '680': {
            slidesperview: 2,
        },
        '1200': {
            slidesperView: 3,
        }
    }
  }); 