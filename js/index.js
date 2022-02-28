// $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   })


let previous = document.querySelectorAll(".slick-prev");
let next=  document.querySelectorAll('.slick-next');



console.log(next);
console.log(previous);
for (let i = 0; i < previous.length; i++) {
    const element = previous[i];
    element.innerHTML =`<i class="fas fa-arrow-circle-left"></i>`;
    
}
for (let i = 0; i < next.length; i++) {
    const element = next[i];
    console.log(element);
    element.innerHTML =`<i class="fas fa-arrow-circle-right"></i>`;
}

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });