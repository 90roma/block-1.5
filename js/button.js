let btn = document.getElementById('btn');
let cont = document.querySelector('.main-menu__cont-logo');
let ic = document.querySelector('.btn-icon');

btn.addEventListener('click', function() {
  cont.classList.toggle('main-menu__cont-logo');
  ic.classList.toggle('btn-icon');
   if (btn.firstChild.data === 'Скрыть') {
    btn.firstChild.data = 'Показать всё';
  } else {
   btn.firstChild.data = 'Скрыть';
   }
});





