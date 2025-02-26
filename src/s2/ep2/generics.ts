function premierElementEP2<T>(tableau: T[]): T | undefined {
    if (tableau.length > 0) {
        return tableau[0];
    } else {
        console.error("Le tableau ne doit pas être vide");
        return undefined;
    }
}
const nombresEP2: number[] = [1, 2, 3, 4, 5];
const chainesEP2: string[] = ["a", "b", "c", "d"];
const objetsEP2: { nom: string, age: number }[] = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 }
];
const videEP2: number[] = [];

console.log(premierElementEP2(nombresEP2));
console.log(premierElementEP2(chainesEP2));
console.log(premierElementEP2(objetsEP2));
console.log(premierElementEP2(videEP2));