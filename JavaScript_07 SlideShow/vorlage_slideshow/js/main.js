"use strict"
document.addEventListener("DOMContentLoaded", ()=>{

// Elemente holen 
const current = document.querySelector('#current')

// in der Klasse imgs 
const imgs = document.querySelectorAll('.imgs img')

const opacity = 0.4

// NEU!!
let currentPicture = imgs[0];

//opacity für das erste Bild setzen
// imgs[0].style.opacity = opacity;

// Bildtransparenz / set opacity
imgs[0].getElementsByClassName.opacity = opacity;

// fadeIn function NEU!!
function fadeIn(x) {
    // Add fading class
    x.classList.add('fade-in');
    // remove fade-in class after .5 seconds
    setTimeout(() => x.classList.remove('fade-in'), 500);
}

// EventListener für alle Bilder setzen 
imgs.forEach(imgs => imgs.addEventListener('click', imgsClick))

// Alternative mit for 

/*
for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('click', imgsClick)
}*/

// e steht für Element



function imgsClick(e){
    
    // Opacity zurücksetzen 
    imgs.forEach(img => (img.style.opacity = 1))

    //Bild austauschen auf das angeklickte Bild
    current.src = e.target.src;

    currentPicture = e.target;
    //Fading Class hinzufügen
    current.classList.add('fade-in')

    //fade-in wieder entfernen (sonst bleibt es immer)
    setTimeout(()=> current.classList.remove('fade-in'), 500);

    //Opacity für ausgewähltes Bild setzen
    e.target.style.opacity = opacity;
}

// Jetzt für die Forwards-Button 
const forward = document.getElementById('forward');
    forward.addEventListener('click', forwardFunction);
    function forwardFunction() {
        //Durchsichtigkeit zurücksetzen
        currentPicture.style.opacity = 1;

        // wenn es ein nächstes Element gibt - als Bild nehmen, wenn nicht über Elternelement das erste Kind auswählen
        
        if (currentPicture.nextElementSibling) {
            currentPicture = currentPicture.nextElementSibling;
        } 
        else {
            currentPicture = currentPicture.parentElement.firstElementChild;
        }
    current.src = currentPicture.src;
    fadeIn(current);
    currentPicture.style.opacity = opacity;
    }

    // Zurück Button 

    const back = document.getElementById('back');

    back.addEventListener('click', backFunction);

    function backFunction() {
        currentPicture.style.opacity = 1
        if (currentPicture.previousElementSibling) {
            currentPicture = currentPicture.previousElementSibling;
        } else {
            currentPicture = currentPicture.parentElement.lastElementChild;
        }
        current.src = currentPicture.src;
        fadeIn(current);
        currentPicture.style.opacity = opacity;
    }

});