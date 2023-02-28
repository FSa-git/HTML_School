"use strict"

/**
 * Mit einem Array können wir z.B. eine komplette Teilnehmerliste
 * speichern!
 */
let students = [
  "Max Müller",
  "Erika Mustermann",
  "Annika Müller",
  "Max Mustermann"
]
console.log(students)

// Was ist der Typ von einem Array?
console.log(typeof students)
console.log(students instanceof Array)

// Wie viele Elemente sind in dem Array?
console.log(".length", students.length)

// Auf ein einzelnes Element zugreifen
console.log("[0]", students[0])

// Wenn ein Element nicht existiert, wird dies stillschweigend 
// ignoriert, und es wird nur "undefined" zurückgegeben
console.log("[100]", students[100])

// Element hinzufügen
students.push("Joker", "Joker 2")
console.log(students)

// Letztes Element entfernen
const lastElement = students.pop()
console.log("lastElement", lastElement)
console.log(students)

// Ein Element überschreiben
students[0] = "Maximilian Müller"
console.log(students)

