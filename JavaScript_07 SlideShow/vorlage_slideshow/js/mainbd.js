"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // Elemente holen
    const currentTag = document.querySelector('#current');
    const imgs = document.querySelectorAll('.imgs img');
    const backBtn = document.querySelector('#back');
    const forwardBtn = document.querySelector('#forward');

    // Defaults
    const opacity = 0.4;
    const imgDuration = 3000;

    // Automatisches Wechseln der Bilder
    let interval = setInterval(forwardFunction, imgDuration);

    // Set default image
    changeImage(imgs[0]);

    // opacity für das erste Bild setzen
    imgs[0].style.opacity = opacity;

    // EventListener für alle Bilder
    imgs.forEach(img => img.addEventListener('click', imgsClick));

    function changeImage(newImg) {
        clearInterval(interval);
        interval = setInterval(forwardFunction, imgDuration);

        if (newImg.src === currentTag.src) {
            return;
        }

        currentTag.classList.add('fade-out');

        setTimeout(() => {
            currentTag.classList.remove('fade-out');

            // Opacity zurücksetzen
            imgs.forEach(img => (img.style.opacity = 1));

            // Bild austauschen auf das angeklickte Bild
            currentTag.src = newImg.src;
            currentTag.alt = newImg.alt;
            currentTag.title = newImg.title;

            // Fading Class hinzufügen
            currentTag.classList.add('fade-in');

            // fade-in wieder entfernen (sonst bleibt es immer)
            setTimeout(() => currentTag.classList.remove('fade-in'), 250);

            // Opacity für ausgewähltes Bild setzen
            newImg.style.opacity = opacity;

        }, 250);
    }


    function imgsClick(e) {
        changeImage(e.target);
    }

    // Eventlistener für die Buttons
    backBtn.addEventListener('click', backFunction);
    forwardBtn.addEventListener('click', forwardFunction);

    function go(direction) {
        clearInterval(interval);
        interval = setInterval(forwardFunction, 3000);

        let currentPicture = null;

        imgs.forEach((img) => {
            if (img.src === currentTag.src) {
                currentPicture = img;
            }
        });

        if (direction === -1) {
            currentPicture.previousElementSibling ? changeImage(currentPicture.previousElementSibling) : changeImage(imgs[imgs.length - 1]);
        } else {
            currentPicture.nextElementSibling ? changeImage(currentPicture.nextElementSibling) : changeImage(imgs[0]);
        }
    }

    // Back Button
    function backFunction() {
        go(-1);
    }

    // Forward Button
    function forwardFunction() {
        go(1);
    }

});