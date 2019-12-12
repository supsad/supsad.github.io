const penTitle = document.querySelector('.pen-title');
const menu = document.querySelector('.js-menu');
const menuTrigger = document.querySelectorAll('.js-menu-trigger-desc');
btn.addEventListener('click-desc', function() {
  menuTrigger.forEach(b => {
    b.classList.toggle('menu-trigger--menu-open');
  });
  menu.classList.toggle('menu--open');
});