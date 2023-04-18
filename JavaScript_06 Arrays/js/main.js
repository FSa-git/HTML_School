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
     
        STUDENTLIST.innerText = null
        students.sort();
        for (let i = 0; i < students.length; i++){
            let studentEintrag = students[i]
            createListItem(studentEintrag)
        }
    }
    createList()

    ADDSTUDENTBTN.addEventListener('click', ()=>{
        let text = NAMEINPUT.value;
        students.push(text);
        createList();
    })

});