"use strict";
function afficherPersonneEP1(personne) {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}
const personneEP1 = {
    nom: 'Alice',
    age: 25
};
afficherPersonneEP1(personneEP1);
