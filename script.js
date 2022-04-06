`use strict`

// Document elements

/////////////// Hidden menu ///////////////

const bar = document.querySelector('.hamburger-img');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.close-btn');
const hidden = document.querySelector('.hidden-menu');
const closeHiddenMenu = document.querySelector(`.ul-hidden-menu`);

// Code for hidden menu

//  Open/close hidden menu
hamburgerMenu.addEventListener(`click`, hiddenMenu);
closeBtn.addEventListener("click", hiddenMenu);
closeHiddenMenu.addEventListener("click", hiddenMenu);


function hiddenMenu() {
  hidden.classList.toggle("burger-menu-hover");
  hamburgerMenu.classList.toggle("hidden");
}
