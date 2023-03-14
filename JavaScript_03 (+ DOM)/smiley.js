// Buttons lesen

let happy = document.getElementById("froehlich");
let sad = document.getElementById("traurig");

// addEventListener für froehlich: .src austauschen und Buttons mit .disabled ansprechen hier ohne Funktionsnamen, die Funktion ist anonym und wird direkt in der geschweiften Klammer aufgerufen
happy.addEventListener('click', () => {

    document.getElementById('smiley').src = '/JavaScript_03 (+ DOM)/Smil_img/smiley1.png'

    happy.disabled = true;
    sad.disabled = false;

});
      // gleiches für traurig
sad.addEventListener('click', () => {
    
    document.getElementById('smiley').src = "/JavaScript_03 (+ DOM)/Smil_img/smiley2.png"

    happy.disabled = false;
    sad.disabled = true;

      });