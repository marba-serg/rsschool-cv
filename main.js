//*=======PRINT-TEXT======*//

let titleColor = document.querySelector('.section-subtitle');
let text = 'Front-End Developer';
let x = 1;
textPrint();

function textPrint() {
  titleColor.innerText = text.slice(0, x);
  x++;
  if (x > text.length) {
    x = 1;
  }
  setTimeout(textPrint, 200);
}


// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
  toggleBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
  }, 1000);
}
navItems.forEach(el => el.addEventListener('click', closeMenu));