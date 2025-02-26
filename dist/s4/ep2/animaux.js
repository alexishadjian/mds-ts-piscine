"use strict";
class AnimalEP2 {
    constructor(nom) {
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
function faireSeDeplacer(animaux) {
    animaux.forEach(animal => animal.seDeplacer());
}
const animaux = [new Chien(), new Chat()];
faireSeDeplacer(animaux);
