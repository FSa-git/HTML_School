'use strict';
function init() {

    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        ///ausfüllen;: Was wird hier ausgewählt???
        let rb = document.querySelector('input[name="fachrichtung"]:checked');
        let selectedValue = rb.value;
        /*  for (const rb of rbs) {
             if (rb.checked) {
                 selectedValue = rb.value;
                 break;
             }
         } */
        datenladen(selectedValue);
    }
    )

    function datenladen(value) {
        ////async? kurz erläutern
        async function fetchText() {

            ////await - kurz erläutern
            let response = await fetch('content/data_' + value + '.xml');

            if (response.status === 200) {
                let data = await response.text();

                // Ab hier Daten verarbeiten als xml parsen
                let parser = new DOMParser();
                let xml = parser.parseFromString(data, 'text/xml');

                let faecher = xml.getElementsByTagName('fach');

                let liste = document.getElementById("liste");
                // Werte entfernen, sonst stehen alle Fächer weiterhin 
                ///in Worte fassen: solange es ....
                while (liste.firstChild) {
                    liste.removeChild(liste.firstChild);
                }

                for (let i = 0; i < faecher.length; i++) {
                    let fach = faecher[i].innerHTML;
                    let fachtext = document.createTextNode(fach);
                    let listenelement = document.createElement('li');
                    listenelement.appendChild(fachtext);
                    liste.appendChild(listenelement);
                }

            }
        }
        fetchText();
    }


}
document.addEventListener('DOMContentLoaded', init);
