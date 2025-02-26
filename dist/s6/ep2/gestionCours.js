import { logger } from "../ep1/mon-module/index.js";
export var NiveauCours;
(function (NiveauCours) {
    NiveauCours[NiveauCours["Debutant"] = 0] = "Debutant";
    NiveauCours[NiveauCours["Intermediaire"] = 1] = "Intermediaire";
    NiveauCours[NiveauCours["Avance"] = 2] = "Avance";
})(NiveauCours || (NiveauCours = {}));
export class GestionCours {
    constructor() {
        this.etudiants = [];
        this.cours = [];
    }
    inscrireEtudiant(coursCode, etudiant) {
        const cours = this.cours.find(c => c.code === coursCode);
        if (cours) {
            if (typeof etudiant === 'object' && etudiant !== null) {
                this.etudiants.push(etudiant);
                logger(`L'étudiant ${etudiant.nom} a été inscrit au cours ${cours.titre}`);
            }
        }
    }
    ajouterCours(cours) {
        this.cours.push(cours);
        logger(`Le cours ${cours.titre} a été ajouté`);
    }
    afficherInscriptions() {
        console.log("Liste des inscriptions:");
        console.log(this.etudiants);
        this.etudiants.forEach(e => {
            console.log(`- ${e.nom}`);
        });
    }
}
