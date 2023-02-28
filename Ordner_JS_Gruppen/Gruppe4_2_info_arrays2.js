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

// Prüfen: Ist ein Element im Array vorhanden?
console.log(students.indexOf("Max Müller"))

// Wenn ein Element nicht existiert -> -1!
console.log(students.indexOf("Max Müller!"))

// Arrays sortieren
students.sort()
console.log(students)

// Sortierung umdrehen
students.reverse()
console.log(students)

// Wichtig: Sparse Arrays!
// students[30] = "Joker"
console.log(students)

// Die .splice()-Funktion zum Entfernen von Elementen
students.splice(0, 2)
console.log(students)

// Die .splice()-Funktion zum Hinzufügen von Elementen
students.splice(1, 0, "Joker")
console.log(students)

