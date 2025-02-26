"use strict";
class Forme {
}
class RectangleEP3 extends Forme {
    constructor(largeur, hauteur) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class CercleEP3 extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
const rectangleEP3 = new RectangleEP3(10, 5);
console.log(rectangleEP3.calculerSurface());
const cercleEP3 = new CercleEP3(5);
console.log(cercleEP3.calculerSurface());
