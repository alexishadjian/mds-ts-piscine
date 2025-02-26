import { alerter, logger } from "../ep1/mon-module/index.js";


interface Etudiant {
    id: number;
    nom: string;
    niveau: string; // ex: "Licence", "Master"
}

export interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours; // Utilisation d'un enum
}

interface Professeur {
    id: number;
    nom: string;
    matiere: string;
}

export enum NiveauCours {
    Debutant,
    Intermediaire,
    Avance,
}


export class GestionCours {
    etudiants: Etudiant[] = [];
    cours: Cours[] = [];

    inscrireEtudiant(coursCode: string, etudiant: Etudiant): void {
        const cours = this.cours.find(c => c.code === coursCode);
        if (cours) {
            if (typeof etudiant === 'object' && etudiant !== null) {
                
                this.etudiants.push(etudiant);
                logger(`L'étudiant ${etudiant.nom} a été inscrit au cours ${cours.titre}`);
            }
        }
    }

    ajouterCours(cours: Cours): void {
        this.cours.push(cours);
        logger(`Le cours ${cours.titre} a été ajouté`);
    }

    afficherInscriptions(): void {
        console.log("Liste des inscriptions:");
        console.log(this.etudiants);
        
        this.etudiants.forEach(e => {
            console.log(`- ${e.nom}`);
        });
    }
}