enum DirectionEP3 {
    Nord,
    Sud,
    Est,
    Ouest
}

function vecteurDirectionEP3(direction: DirectionEP3): [number, number] {
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

function deplacer(
    point: [number, number],
    direction: DirectionEP3
): [number, number] {
    const [dx, dy] = vecteurDirectionEP3(direction);
    return [point[0] + dx, point[1] + dy];
}

const point: [number, number] = [5, 5];

console.log(deplacer(point, DirectionEP3.Nord)); // [5, 6]
console.log(deplacer(point, DirectionEP3.Sud));  // [5, 4]
console.log(deplacer(point, DirectionEP3.Est));  // [6, 5]
console.log(deplacer(point, DirectionEP3.Ouest)); // [4, 5]