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
if(hamburgerMenu) hamburgerMenu.addEventListener(`click`, hiddenMenu);
if(closeBtn) closeBtn.addEventListener("click", hiddenMenu);
if(closeHiddenMenu) closeHiddenMenu.addEventListener("click", hiddenMenu);


function hiddenMenu() {
  // hidden.classList.toggle("burger-menu-hover");
  // hamburgerMenu.classList.toggle("hidden");
}


/////////////// Click on div ///////////////

const divContainer = document.querySelectorAll('.div-container');

for (var i = 0; i < divContainer.length; i++) {
  divContainer[i].addEventListener('click', clickChildrenA, false);
}

// divContainer.addEventListener(`click`, clickChildrenA);

function clickChildrenA(event) {
  // debugger
 let aSelector = event.target.querySelector('a');
 if(aSelector) {
  aSelector.click();
 }
}
