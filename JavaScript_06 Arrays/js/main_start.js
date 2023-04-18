"use strict"

/**
 * Mit einem Array können wir z.B. eine komplette Teilnehmerliste
 * speichern!
 */
let students = [
  'Max Müller',
  'Erika Mustermann',
  'Annika Müller',
  'Max Mustermann'
]

// Was ist der Typ von einem Array?
console.log(typeof students)
console.log(students instanceof Array)

// Wie viele Elemente sind in dem Array?
console.log('.length', students.length)

// Auf ein einzelnes Element zugreifen
console.log('[0]', students[0])

// Wenn ein Element nicht existiert, wird dies 
// ignoriert, und es wird nur 'undefined' zurückgegeben
console.log('[100]', students[100])

// Element hinzufügen
students.push('Tim Meier', 'Susi Neuer')
console.log(students)

// Letztes Element entfernen
const lastElement = students.pop()
console.log('lastElement', lastElement)
console.log(students)
// students.pop entfernt nicht nur das letzte Element und definiert das Array students neu, sondern gibt auch das gerade entfernte Element zurück.

// Ein Element überschreiben
students[0] = 'Maximilian Müller'
console.log(students)


// Prüfen: Ist ein Element im Array vorhanden?
console.log(students.indexOf('Max Müller'))

// Wenn ein Element nicht existiert -> -1!
console.log(students.indexOf('Max Müller!'))

// Arrays sortieren
students.sort()
console.log(students)

// Sortierung umdrehen
students.reverse()
console.log(students)


// Die .splice()-Funktion zum Entfernen von Elementen (Anfang 0, 2 Elemente)
students.splice(0, 2)
console.log(students)

// Die .splice()-Funktion zum Hinzufügen von Elementen
students.splice(1, 0, 'Joker')
console.log(students)