
'use strict';
function init() {

    const btn = document.querySelector('button');
    btn.addEventListener('click', ()=>{
        let rb = document.querySelectorAll('input[name="fachrichtung"]:checked');
        let selectedValue = rb.values;
        datenladen(selectedValue);
    });

    function datenladen(value){
    async function fetchText() {
        let response = await fetch('content/data_loesung.xml');

        // Für Fehlermeldung
        // let response = await fetch('content/data_' + value + 'loesung.xml');

        console.log(response.status); // 200
        console.log(response.statusText); // OK

        if (response.status === 200) {
            console.log(response);
            let data = await response.text();  // ? Was ist das ? 
            //console.log(data);

            // Ab hier Daten verarbeiten (Vergleiche S 505 Buch Ackermann auch in Moodle)
            // ? Was ist das ?
            let parser = new DOMParser();
            let xmlDOM = parser.parseFromString(data, 'text/xml');
            console.log(xmlDOM);

            /*  let faecher = xml.getElementsByTagName('fach'); */
            let faecher = xmlDOM.querySelectorAll('fach');
            for (let i = 0; i < faecher.length; i++) {
                let fach = faecher[i].innerHTML;
                //console.log(fach);
                let fachtext = document.createTextNode(fach);
                let listenelement = document.createElement('li');

                listenelement.appendChild(fachtext);
                document.getElementById('liste').appendChild(listenelement);
            }
        } else {
            alert("Daten können nicht geladen werden");
        }
    }
    fetchText();
}
}
document.addEventListener('DOMContentLoaded', init);


/*  Alternative mit querySelectorAll und forEach */
/* let faecher = xmlDOM.querySelectorAll('fach');
console.log(faecher)
faecher.forEach(element => {
  let fach = document.createTextNode(element.textContent);
  let listenelement = document.createElement('li');
  listenelement.appendChild(fach)
  document.getElementById('liste').appendChild(listenelement)

}) */

let medien = document.getElementById('Bmedien');
let technik = document.getElementById('Btechnik');

medien.addEventListener('click',()=>{



});