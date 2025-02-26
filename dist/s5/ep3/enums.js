"use strict";
var DirectionEP3;
(function (DirectionEP3) {
    DirectionEP3[DirectionEP3["Nord"] = 0] = "Nord";
    DirectionEP3[DirectionEP3["Sud"] = 1] = "Sud";
    DirectionEP3[DirectionEP3["Est"] = 2] = "Est";
    DirectionEP3[DirectionEP3["Ouest"] = 3] = "Ouest";
})(DirectionEP3 || (DirectionEP3 = {}));
function vecteurDirectionEP3(direction) {
    switch (direction) {
        case DirectionEP3.Nord:
            return [0, 1];
        case DirectionEP3.Sud:
            return [0, -1];
        case DirectionEP3.Est:
            return [1, 0];
        case DirectionEP3.Ouest:
            return [-1, 0];
    }
}
function deplacer(point, direction) {
    const [dx, dy] = vecteurDirectionEP3(direction);
    return [point[0] + dx, point[1] + dy];
}
const point = [5, 5];
console.log(deplacer(point, DirectionEP3.Nord)); // [5, 6]
console.log(deplacer(point, DirectionEP3.Sud)); // [5, 4]
console.log(deplacer(point, DirectionEP3.Est)); // [6, 5]
console.log(deplacer(point, DirectionEP3.Ouest)); // [4, 5]
