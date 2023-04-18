"use strict"
document.addEventListener("DOMContentLoaded", ()=>{
    // Array definieren 
    let students = [
        'Müller, Manuel', 'Koche, Franzi', 'Meyer Lutz' 
    ]
    // Teilnehmer hinzufügen 
    students.push('Renz, Carol');
    console.log(students);

    // Array sortieren und testen 
    students.sort;
    console.log(students);

    // Alle nötigen Elemente aus dem HTML lesen
    const AGBINPUT = document.getElementById('agbInput')
    const ADDSTUDENTBTN = document.getElementById('add-student')
    const NAMEINPUT = document.getElementById('nameInput')
    const STUDENTLIST = document.getElementById('students-list')

    // Funktion, um ein Listenelement zu erstellen und in der ol studentList 
    // Hinzuzufügen 
    function createListItem(x) {
        let nameNeu = document.createTextNode(x);
        const liElement = document.createElement('li')
        liElement.appendChild(nameNeu);
        STUDENTLIST.appendChild(liElement)
    }

    // Funktion, um die ganze Liste zu erstellen 
    function createList(){
     
        // STUDENTLIST.innerText = null

        // 
        while(STUDENTLIST.lastElementChild){
            STUDENTLIST.removeChild(STUDENTLIST.lastElementChild)
        }
        //

        // Nur mit diesem Teil alleine würde die Ganze ArrayListe wieder gezeigt 
        // Array sortieren und für jeden Eintrag einen Listeneintrag erstellen
        students.sort();
        for (let i = 0; i < students.length; i++){
            let studentEintrag = students[i]
            createListItem(studentEintrag)
        }
    }
    // Initiale Liste erstellen 
    createList()

    // Neuer Eintrag hinzufügen - erst ins Array, dann am Bildschirm
    ADDSTUDENTBTN.addEventListener('click', ()=>{

        // Für die AGB
        if(AGBINPUT.checked === false){
            alert('Bitte AGB lesen und akzeptieren!')
            return
        }

        let text = NAMEINPUT.value;

        // Wenn man seinen Namen vergisst
        if(text.trim() == ""){
            alert('Sie haben einen Namen vergessen')
            AGBINPUT.checked = false
            return
        }

        students.push(text);

        // Dass der Input danach geleert wird
        NAMEINPUT.value = ""
        AGBINPUT.checked = false;

        createList();
    })

});