const menuBtn = document.querySelector('.menuBtn');
const sideMenu = document.querySelector('#side_menu');
const emptyBox = document.querySelector('.empty_box');
const body = document.querySelector('body');

menuBtn.addEventListener('click', event => {
  sideMenu.classList.add('active');
  emptyBox.classList.add('active');
});

body.addEventListener('click', event => {
  if (event.target.classList[0] === 'empty_box') {
    sideMenu.classList.remove('active');
    emptyBox.classList.remove('active');
  }
});
