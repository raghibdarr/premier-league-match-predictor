const generateRandomNumber = (num=1) => {
    return Math.floor(Math.random() * num)
}

const generateResult = (homeTeamPI, awayTeamPI) => {
    const morePointsWonAtHome = 0.39; // teams win 0.39 more points at home than away
    const availablePoints = 3;
    const homeAdvantage = morePointsWonAtHome/availablePoints + 1;
    const eloDifference = (homeAdvantage * homeTeamPI) - awayTeamPI;
    console.log(eloDifference.toFixed(2));

    if (Math.abs(eloDifference) <= 3) {
        console.log("draw");
        return "DRAW";
    } else if (Math.sign(eloDifference) === 1) {
        console.log("win");

        return "WIN";
    } else {
        console.log("loss");

        return "LOSS";
    }
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
                        if (i+j<=4) {
                            this.potentialScores.winningScores.likelyWinningScores.push(score);
                        } else {
                            this.potentialScores.winningScores.unlikelyWinningScores.push(score);
                        }
                    } else if (i<j) {
                        if (i+j<=4) {
                            this.potentialScores.losingScores.likelyLosingScores.push(score);
                        } else {
                            this.potentialScores.losingScores.unlikelyLosingScores.push(score);
                        }
                    }
                }
            }
        }
        return this.potentialScores;
    },
    generateMatch(homeTeamName, awayTeamName) {
        let homeTeam = this.teams[homeTeamName];
        let awayTeam = this.teams[awayTeamName];
        let result = generateResult(homeTeam, awayTeam);
        const randomNum = generateRandomNumber(100);
        let finalResult;

        switch (result) {
            case "WIN":
                if (randomNum <= 85) {
                    const likelyWinningArray = this.potentialScores.winningScores.likelyWinningScores;
                    finalResult = likelyWinningArray[generateRandomNumber(likelyWinningArray.length)];
                } else {
                    const unlikelyWinningArray = this.potentialScores.winningScores.unlikelyWinningScores;
                    finalResult = unlikelyWinningArray[generateRandomNumber(unlikelyWinningArray.length)];
                }
                break;
            case "LOSS":
                if (randomNum <= 85) {
                    const likelyLosingArray = this.potentialScores.losingScores.likelyLosingScores;
                    finalResult = likelyLosingArray[generateRandomNumber(likelyLosingArray.length)];
                } else {
                    const unlikelyLosingArray = this.potentialScores.losingScores.unlikelyLosingScores;
                    finalResult = unlikelyLosingArray[generateRandomNumber(unlikelyLosingArray.length)];
                }
                break;
            case "DRAW":
                if (randomNum <= 85) {
                    const likelyDrawingArray = this.potentialScores.drawingScores.likelyDrawingScores;
                    finalResult = likelyDrawingArray[generateRandomNumber(likelyDrawingArray.length)];
                } else {
                    const unlikelyDrawingArray = this.potentialScores.drawingScores.unlikelyDrawingScores;
                    finalResult = unlikelyDrawingArray[generateRandomNumber(unlikelyDrawingArray.length)];
                }
                break;
        }

        let toString = `Result: ${homeTeamName} ${finalResult} ${awayTeamName}`;
        // console.log(finalResult);
        return(toString);

    }


}



// console.log(generatePotentialScores());
const data = premData;
console.log(data.generatePotentialScores());
// console.log(data.teams['arsenal']);
console.log(data.generateMatch('arsenal', 'brighton'));
console.log(data.generateMatch('brighton', 'arsenal'));
console.log(data.generateMatch('man city', 'norwich'));
console.log(data.generateMatch('norwich', 'man city'));
console.log(data.generateMatch('spurs', 'chelsea'));
console.log(data.generateMatch('chelsea', 'spurs'));
console.log(data.generateMatch('everton', 'leicester'));
console.log(data.generateMatch('leicester', 'everton'));

