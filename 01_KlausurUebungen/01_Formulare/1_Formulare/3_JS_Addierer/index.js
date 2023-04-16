let nr1 = document.getElementById('zahl1');
let nr2 = document.getElementById('zahl2');
let nr3 = document.getElementById('zahl3');

berechnen.addEventListener('click', ()=>{
    nr3.innerText = (parseInt(nr1.value)+parseInt(nr2.value));
});
