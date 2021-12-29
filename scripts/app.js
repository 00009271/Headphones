$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        touchMove:false, 
        swipe:false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed:2000,
              infinite: true,
              swipe:true
            }
          }
       
        ]});
      $('.slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: false,
      });
  });

const btn= document.querySelector("#hamburger-3");
btn.addEventListener('click', function(){
      btn.classList.toggle("is-active");
      document.querySelector(".nav-content").classList.toggle('active')
  })

  function sum(abc) {
    const m = a*b*c;
    console.log(m)
  }
  