"use strict";
class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        console.log(`Ceci est un rectangle de surface ${forme.calculerSurface()}`);
    }
    else {
        console.log(`Ceci est un cercle de surface ${forme.calculerSurface()}`);
    }
}
const rectangle = new Rectangle(10, 20);
const cercle = new Cercle(5);
console.log(rectangle.calculerSurface());
console.log(cercle.calculerSurface());
