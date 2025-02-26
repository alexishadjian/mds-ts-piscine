function creerScore(): [string, number] {
    return ["Joueur1", 100];
}

function afficherScore(score: [string, number]) {
    console.log(`Le joueur ${score[0]} a un score de ${score[1]}`);
}

const score = creerScore();
afficherScore(score);