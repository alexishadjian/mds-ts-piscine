interface PersonneEP2 {
    readonly id: number;
    nom: string;
    age: number;
    adresse?: Adresse;
}

interface Adresse {
    rue: string;
    ville: string;
}

const personne1EP2: PersonneEP2 = {
    id: 1,
    nom: 'Alice',
    age: 25,
    adresse: {
        rue: '123 Rue Principale',
        ville: 'Paris'
    }
}

const personne2EP2: PersonneEP2 = {
    id: 2,
    nom: 'Bob',
    age: 30,
    adresse: {
        rue: '456 Rue Secondaire',
        ville: 'Lyon'
    }
};

const personne3EP2: PersonneEP2 = {
    id: 3,
    nom: 'Charlie',
    age: 22
};


function afficherPersonneEP2(personne: PersonneEP2): void {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}

afficherPersonneEP2(personne1EP2);


function afficherPersonneAvancee(personne: PersonneEP2): void {
    if (personne.adresse) {
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`);
    } else {
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`);
    }
}

afficherPersonneAvancee(personne1EP2);
afficherPersonneAvancee(personne2EP2);
afficherPersonneAvancee(personne3EP2);