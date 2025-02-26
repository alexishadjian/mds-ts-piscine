function traiterValeur(valeur: number | string) {
    if (typeof valeur === "string") {
        return valeur.length;
    } else {
        return valeur * 2;
    }
}

console.log(traiterValeur("Hello"));
console.log(traiterValeur(5));