# premier-league-match-predictor

## General info

 A simple generator program that takes in two premier league teams to generate a realistic, randomized result, based on the various premier league teams' Power Indexes. (Power Indexes are based on teams' attacking and defensive ratings, and are obtained from [fivethirtyeight.com](https://fivethirtyeight.com/methodology/how-our-club-soccer-predictions-work/)).

## Usage

Examples of generated matches have been logged to the console at the end of the script. These can be altered, or additional matches can be logged below.

For example, to generate the result of Manchester Utd vs Manchester City, the following would be logged to the console:

```javascript
console.log(data.generateMatch('man utd', 'man city'));
```
