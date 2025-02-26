interface PersonneEP1 {
    nom: string;
    age: number;
}

function afficherPersonneEP1(personne: PersonneEP1): void {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}

const personneEP1 = {
    nom: 'Alice',
    age: 25
}


afficherPersonneEP1(personneEP1);