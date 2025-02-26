"use strict";
function afficherInfoProfessionnelle(personne) {
    if ('poste' in personne) {
        console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    }
    else if ('entreprise' in personne) {
        console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
    }
}
const employe1 = {
    nom: 'Jeanne',
    poste: 'Manager'
};
const client1 = {
    nom: 'John',
    entreprise: 'Lemonade Inc.'
};
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
