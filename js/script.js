$(document).ready(function(){
    $('.js-slider').slick({
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
});

(() => {
  const menuBoxEl = document.getElementById('menu-box');
  const menuListEl = document.getElementById('menu-list');
  const btnMenuEl = document.getElementById('btn-menu');
  const btnGamEl = document.getElementById('btn-gam');
  const btnCloseEl = document.getElementById('btn-close');

  btnMenuEl.addEventListener('click', () => {
    menuBoxEl.classList.toggle('header__box--mobile');
    menuListEl.classList.toggle('header__menu-list--mobile');
    btnGamEl.classList.toggle('header__menu-gam--mobile');
    btnCloseEl.classList.toggle('header__menu-close--mobile');
  });
})();