"use strict";
function isVehicule(obj) {
    return typeof obj.marque === 'string' && typeof obj.annee === 'number';
}
function afficherVehicule(obj) {
    if (isVehicule(obj)) {
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    }
    else {
        console.log("Objet invalide pour un véhicule.");
    }
}
const vehicule1 = { marque: 'Toyota', annee: 2015 };
const vehicule2 = { marque: 'Toyota', annee: '2015' };
const vehicule3 = { marque: 'Toyota' };
afficherVehicule(vehicule1);
afficherVehicule(vehicule2);
afficherVehicule(vehicule3);
