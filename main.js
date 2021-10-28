const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
}

const premData = {
    teams: {
        'arsenal': 77.2, 'chelsea': 88.9, 
        'man utd': 80.9, 'liverpool': 91.4,
        'man city': 93.7, 'tottenham': 74.0,
        'leicester': 74.4, 'west ham': 76.4, 
        'everton': 70.0, 'newcastle': 62.0,
        'brighton': 74.7, 'norwich': 55.8,
        'aston villa': 71.4, 'burnley': 64.4,
        'brentford': 71.3, 'watford': 60.3,
        'southampton': 68.6, 'brighton': 74.7, 
        'crystal palace': 67.3, 'leeds': 69.9

    },
    potentialScores: {
        winningScores: {
            likelyWinningScores: [],
            unlikelyWinningScores: []
        },
        losingScores: {
            likelyLosingScores: [],
            unlikelyLosingScores: []
        },
        drawingScores: {
            likelyDrawingScores: [],
            unlikelyDrawingScores: []
        }
    },
    generatePotentialScores() {
        for (let i=0; i<=8; i++) {
            for (let j=0; j<=8; j++) {
                let score = `${i}:${j}`;
                if (i+j<=9) {    
                    if (i===j) {
                        if (i+j<=4) {
                            this.potentialScores.drawingScores.likelyDrawingScores.push(score);
                        } else {
                            this.potentialScores.drawingScores.unlikelyDrawingScores.push(score);
                        }
                    } else if (i>j) {
                        if (i+j<=5) {
                            this.potentialScores.winningScores.likelyWinningScores.push(score);
                        } else {
                            this.potentialScores.winningScores.unlikelyWinningScores.push(score);
                        }
                    } else if (i<j) {
                        if (i+j<=5) {
                            this.potentialScores.losingScores.likelyLosingScores.push(score);
                        } else {
                            this.potentialScores.losingScores.unlikelyLosingScores.push(score);
                        }
                    }
                }
            }
        }
        return this.potentialScores;
    }


}


// console.log(generatePotentialScores());
const data = premData;
console.log(data.generatePotentialScores());