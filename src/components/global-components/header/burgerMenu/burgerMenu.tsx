import './burgerMenu.css';

export default function BurgerMenu() {
  const burgerBtn = document.querySelector('.burger_btn');
  const menuNav = document.querySelector('.nav_wrapper');
  const menuNavLinks = document.querySelectorAll('.nav_link');

  function closeMenu() {
    burgerBtn!.classList.remove('burger_btn_open');
    menuNav!.classList.remove('nav_wrapper_open');
    document.body.style.overflowY = 'visible';
  }

  if (burgerBtn!.classList.contains('burger_btn_open')) {
    closeMenu();
  } else {
    burgerBtn!.classList.toggle('burger_btn_open');
    menuNav!.classList.add('nav_wrapper_open');
    document.body.style.overflowY = 'hidden';
  }

  menuNavLinks.forEach((item) => item.addEventListener('click', closeMenu));
}
