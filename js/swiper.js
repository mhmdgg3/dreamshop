
var swiper = new Swiper(".slid_swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBllests: true,
      clickable:true
    },
    autoplay:{
        delay:2500,
    },
    loop:true
  });


//   swiper slide product


var swiper = new Swiper(".slide-broduct", {
    slidesPerView: 4,
    spaceBetween:20,
   
    autoplay:{
        delay:2500,
    },
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
    },
    loop:true
  });