`use strict`

// Document elements

/////////////// Overlay pics ///////////////

// Makes arrey of buttens
const outerDiv = document.querySelectorAll(`.portfolio-item-container-outer`);   

// Close btn and overlay container
const closeBtn = document.querySelector(`.closeBtn`);
const overlays = document.querySelectorAll(`.overlay`);

// Variable that will contain overlay once button is clicked and catch id of this btn
// and use it to choose needed class of overlay
let generalDiv;
 


//  Open/close overlay pics

// loop over overlays
for (var i = 0; i < overlays.length; i++) {
    overlays[i].addEventListener('click', overlayImg1, false);
}

// loop over btns
for (var i = 0; i < outerDiv.length; i++) {
    outerDiv[i].addEventListener('click', overlayImg1, false);
}

closeBtn.addEventListener(`click`, overlayImg1);


function overlayImg1(event) {
    if(event.currentTarget.id) {
        generalDiv = document.querySelector('.' + event.currentTarget.id);
    }
    generalDiv.classList.toggle("overlay-pics-hidden");
    closeBtn.classList.toggle("overlay-pics-hidden");
    console.log(`click happen000`);
};

function closeOverlay(){
    overlay.classList.add(`overlay-pics-hidden`);
    console.log(`click happen111`);
}