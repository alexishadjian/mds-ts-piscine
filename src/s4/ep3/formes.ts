abstract class Forme {

    abstract calculerSurface(): number;
}


class RectangleEP3 extends Forme {
    largeur: number;
    hauteur: number;

    constructor(largeur: number, hauteur: number) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class CercleEP3 extends Forme {
    rayon: number;

    constructor(rayon: number) {
        super();
        this.rayon = rayon;
    }

    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}



const rectangleEP3 = new RectangleEP3(10, 5);
console.log(rectangleEP3.calculerSurface());

const cercleEP3 = new CercleEP3(5);
console.log(cercleEP3.calculerSurface());