let btn = document.getElementById('btn');
let mainMenuContent = document.querySelector('.main-menu__wrapper');
let btnIcon = document.querySelector('.btn-icon');
let btnText = document.querySelector('.main-menu__btn-text');

btn.addEventListener('click', function() {
  mainMenuContent.classList.toggle('main-menu__wrapper');
  btnIcon.classList.toggle('btn-icon');
   if (btnText.innerText === 'Показать всё') {
       btnText.innerText = 'Скрыть';
  } else {
       btnText.innerText = 'Показать всё';
   }
});
