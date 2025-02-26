interface IAnimal {
    nom: string;
    seDeplacer(): void;
}

class AnimalEP2 implements IAnimal {
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }

    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace`);
    }
}

class Chien extends AnimalEP2 {
    constructor() {
        super('chien');
    }

    seDeplacer() {
        console.log(`Le chien ${this.nom} court.`);
    }
}

class Chat extends AnimalEP2 {
    constructor() {
        super('chat');
    }

    seDeplacer() {
        console.log(`Le chat ${this.nom} saute.`);
    }
}

function faireSeDeplacer(animaux: IAnimal[]) {
    animaux.forEach(animal => animal.seDeplacer());
}

const animaux: IAnimal[] = [new Chien(), new Chat()];
faireSeDeplacer(animaux);