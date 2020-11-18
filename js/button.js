let btn = document.getElementById('btn');
let mainMenuContent = document.querySelector('.main-menu__wrapper');
let icon = document.querySelector('.btn-icon');

btn.addEventListener('click', function() {
  mainMenuContent.classList.toggle('main-menu__wrapper');
  icon.classList.toggle('btn-icon');
   if (btn.firstChild.data === 'Скрыть') {
    btn.firstChild.data = 'Показать всё';
  } else {
   btn.firstChild.data = 'Скрыть';
   }
});
