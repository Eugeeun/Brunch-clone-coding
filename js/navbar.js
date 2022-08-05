const navbar = document.querySelector('#navbar');

const menuBtnAndLogo = document.createElement('div');
menuBtnAndLogo.setAttribute('class', 'menuBtnAndLogo');
const menuBtn = document.createElement('i');
menuBtn.classList.add('fa-solid', 'fa-bars', 'menuBtn');
const logo = document.createElement('a');
logo.classList.add('logo');
logo.href = '#';
logo.innerHTML = 'brunch';

menuBtnAndLogo.appendChild(menuBtn);
menuBtnAndLogo.appendChild(logo);
// console.log(menuBtnAndLogo);

const applyWriterAndSearch = document.createElement('div');
applyWriterAndSearch.classList.add('applyWriterAndSearch');
const applyWriter = document.createElement('button');
applyWriter.innerHTML = '작가신청';
const searchLogo = document.createElement('i');
searchLogo.classList.add('fa-solid', 'fa-magnifying-glass');

applyWriterAndSearch.appendChild(applyWriter);
applyWriterAndSearch.appendChild(searchLogo);
// console.log(applyWriterAndSearch);

navbar.appendChild(menuBtnAndLogo);
navbar.appendChild(applyWriterAndSearch);
// console.log(navbar);
