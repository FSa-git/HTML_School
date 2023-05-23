"use strict";
function init() {
    // Variablen deklarieren
    let points = 0; //Rätselpunkte
    let zaehler = 0; // für die Fragen (erste, zweite, ..)
    let fragen, frage, json; // alle Fragen, eine Frage, JSON Rückgabe
    const container = document.getElementById("container");
    const punkte = document.getElementById("punkte");
    const ergebnis = document.getElementById("ergebnis");
    const buttons = document.getElementById("buttons");
    const fireworks = document.createElement("img");
    fireworks.src = "images/ray-hennessy-fireworks.jpg";

    //Daten holen und in die Variable json scheiben
    async function fetchJSON() {
        let response = await fetch("json/data_neu.json");
        if (response.status === 200) {
            console.log(response);
            json = await response.json();
            console.log(json);
            console.log(typeof json);
            // Ab hier Daten verarbeiten
            quizausfuehren();
        }
    }

    fetchJSON();

    function quizausfuehren() {
        //Eine Frage erstellen: erst vorhandene Frage löschen, dann neue Frage hinzufügen
        function frageerstellen() {
            while (container.lastElementChild) {
                container.removeChild(container.lastElementChild);
            }
            fragen = json.fragen;
            //console.log(fragen);
            frage = fragen[zaehler];
            //console.log(fragen[zaehler]);
            let aussage = document.createTextNode(frage.aussage);
            //console.log(aussage);
            let paragraph = document.createElement("p");
            paragraph.classList.add("question");
            paragraph.appendChild(aussage);
            container.appendChild(paragraph);
        }

        // erste Frage anzeigen
        frageerstellen(zaehler);

        // Funktion, um Punkte im span eintragen
        function punkteEintragen(x) {
            punkte.innerHTML = "";
            punkte.appendChild(document.createTextNode(x));
        }

        //erste Punkte anzeigen
        punkteEintragen(points);

        //Funktion, um die Farbe der Buttons kurz austauschen
        function changeColor(button, correct) {
            if (correct) {
                button.classList.add("gruen");
                setTimeout(function () {
                    button.classList.remove("gruen");
                }, 1000);
            } else {
                button.classList.add("rot");
                setTimeout(function () {
                    button.classList.remove("rot");
                }, 1000);
            }
        }

        // Weitere Fragen anzeigen
        function neuefrage() {
            if (zaehler < fragen.length - 1) {
                zaehler++;
                setTimeout(function () {
                    frageerstellen(zaehler);
                }, 1000);
            } else {
                summary();
            }
        }

        //EventListener auf Buttons
        let btns = document.querySelectorAll(".btn");
        //console.log(btns);
        btns.forEach((button) => button.addEventListener("click", controleAnswer));

        function controleAnswer(e) {
            //alert("Ich wurde geklickt!");
            let wert = e.target.value;
            console.log(wert);
            if (frage.correct === true && wert === "richtig") {
                points = points + 10;
                punkteEintragen(points);
                changeColor(e.target, true);
            } else if (frage.correct === false && wert === "falsch") {
                points = points + 10;
                punkteEintragen(points);
                changeColor(e.target, true);
            } else {
                changeColor(e.target, false);
            }
            neuefrage();
        }

        // Gesamtergebnis dokumentieren
        function summary() {
            setTimeout(function () {
                while (container.lastElementChild) {
                    container.removeChild(container.lastElementChild);
                }
                while (buttons.lastElementChild) {
                    buttons.removeChild(buttons.lastElementChild);
                    //console.log(buttons);
                }
                container.appendChild(fireworks);
            }, 800);

            const rueckmeldungen = json.rueckmeldungen;
            let text;
            let gesamtpunkte = fragen.length * 10;
            //alert("Es gab insgesamt " + gesamtpunkte + " Punkte")
            if (points <= 10) {
                text = rueckmeldungen[3].anzeige;
                ergebnis.appendChild(document.createTextNode(text));
            } else if (points <= gesamtpunkte / 4 && points > 10) {
                text = rueckmeldungen[2].anzeige;
                ergebnis.appendChild(document.createTextNode(text));
            } else if (points <= gesamtpunkte / 2 && points > gesamtpunkte / 4) {
                text = rueckmeldungen[1].anzeige;
                ergebnis.appendChild(document.createTextNode(text));
            } else {
                text = rueckmeldungen[0].anzeige;
                ergebnis.appendChild(document.createTextNode(text));
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", init);
