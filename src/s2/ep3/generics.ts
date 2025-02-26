interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const maVoiture: Voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2005
}

const marque = getProperty(maVoiture, "marque");
const annee = getProperty(maVoiture, "annee");

console.log(marque);
console.log(annee);


const couleur = getProperty(maVoiture, "couleur");