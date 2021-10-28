# premier-league-match-predictor

## General info

 A simple generator program that takes in two premier league teams to generate a realistic, randomized result, based on the various premier league teams' Power Indexes along with home advantage. Power Indexes are based on teams' attacking and defensive ratings, and are obtained from [fivethirtyeight.com](https://fivethirtyeight.com/methodology/how-our-club-soccer-predictions-work/).

 Additionally, home advantage is taken into consideration when generating the results: teams at home won 0.39 more points at home than away on average [[1]](#1), and thus this advantage is applied to the inputted home team.

## Usage

Examples of generated matches have been logged to the console at the end of the script. These can be altered, or additional matches can be logged below. To log a generated match to the console, the following format should be followed (where [home team] and [away team] would be replaced by any premier league team):

```javascript
console.log(data.generateMatch('[home team]', '[away team]'));
```

For example, to generate the result of Manchester Utd vs Manchester City, with , the following would be logged to the console:

```javascript
console.log(data.generateMatch('man utd', 'man city'));
```

The result will then be outputted in the following format:

`Result: man utd 0:2 man city`

## References
<a id="1">[1]</a> 
McCarrick, D., et al (2021). 
Home advantage during the COVID-19 pandemic: Analyses of European football leagues,
Psychology of Sport and Exercise,
Volume 56,
ISSN 1469-0292,
<https://doi.org/10.1016/j.psychsport.2021.102013>.