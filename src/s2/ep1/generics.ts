function premierElement<T>(tableau: T[]): T {
    return tableau[0];
}

const nombres: number[] = [1, 2, 3, 4, 5];
const chaines: string[] = ["a", "b", "c", "d"];
const objets: { nom: string, age: number }[] = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 }
];

console.log(premierElement(nombres));
console.log(premierElement(chaines));
console.log(premierElement(objets));