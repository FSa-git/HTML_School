
//Funktion definieren
function addieren() {
    // Werte abholen
    let objInp1 = document.getElementById("z1")
    let objInp2 = document.getElementById("z2")
// Werte holen, in Zahl umwandeln, berechnen
    let summe = parseInt(objInp1.value) + parseInt(objInp2.value);

    // Wert ausgeben 
    document.getElementById("erg").innerHTML = summe;
    console.log(summe)
}
//Button lesen und Funktion aufrufen, z. B.
berechnen.addEventListener('click', addieren);