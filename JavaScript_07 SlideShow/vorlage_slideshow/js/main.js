"use strict"
document.addEventListener("DOMContentLoaded", ()=>{

// Elemente holen 
const current = document.querySelector('#current')

// in der Klasse imgs 
const imgs = document.querySelectorAll('.imgs img')

const opacity = 0.4

// Bildtransparenz / set opacity
imgs[0].getElementsByClassName.opacity = opacity;

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

    //Fading Class hinzufügen
    current.classList.add('fade-in')

    //fade-in wieder entfernen (sonst bleibt es immer)
    setTimeout(()=> current.classList.remove('fade-in'), 500);

    //Opacity für ausgewähltes Bild setzen
    e.target.style.opacity = opacity;
}

});