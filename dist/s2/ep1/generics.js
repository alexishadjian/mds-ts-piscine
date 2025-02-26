"use strict";
function premierElement(tableau) {
    return tableau[0];
}
const nombres = [1, 2, 3, 4, 5];
const chaines = ["a", "b", "c", "d"];
const objets = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 }
];
console.log(premierElement(nombres));
console.log(premierElement(chaines));
console.log(premierElement(objets));
