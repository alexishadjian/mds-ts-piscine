"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const maVoiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2005
};
const marque = getProperty(maVoiture, "marque");
const annee = getProperty(maVoiture, "annee");
console.log(marque);
console.log(annee);
const couleur = getProperty(maVoiture, "couleur");
