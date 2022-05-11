`use strict`

// Document elements

/////////////// Overlay pics ///////////////

// Makes arrey of buttens
const outerDiv = document.querySelectorAll(`.portfolio-item-container-outer`);   

// Close btn and overlay container
const closeBtn1 = document.querySelector(`.closeBtn`);
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

if(closeBtn1) closeBtn1.addEventListener(`click`, overlayImg1);
document.addEventListener("keydown", closeOverlay)

// document.addEventListener('keydown', function(event){
// 	if(event.key === "Escape"){
//         overlays.classList.toggle("overlay-pics-hidden")
// 	}
// });


function overlayImg1(event) {
    if(event.currentTarget.id) {
        generalDiv = document.querySelector('.' + event.currentTarget.id);
    }
    generalDiv.classList.toggle("overlay-pics-hidden");
    generalDiv.classList.add("active-overlay");
    
   if(event.currentTarget.id == '') {
       document.querySelector('.active-overlay').classList.add("overlay-pics-hidden");
       document.querySelector('.active-overlay').classList.remove("active-overlay");
   }
};

function closeOverlay(event){
    const key = event.key;
    if (key === "Escape") {
        document.querySelector('.active-overlay').classList.add("overlay-pics-hidden");
        document.querySelector('.active-overlay').classList.remove("active-overlay");
    }
}