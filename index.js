// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *   counter1 has let count as a local variable, while counter two has to reach out to let count as a global variable
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1, it has count as a 'privatized' variable, it doesn't need to reach out into the global scope for help
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1 code does not allow changes to the count variable, which also stops the function from being changed by other code.
 *counter2 code allows count to be changed, which could be useful if you're expecting to change a function using other code
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let random = Math.floor(Math.random()*3);
  return random;
}
console.log(inning());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, innings){
  let home = 0;
  let away = 0;
    for(let i = 0; i < innings; i++){
      home = home + cb;
      away = away + cb;
    }

  return ` home: ${home}    away: ${away}`
}
console.log(finalScore(inning(),  2));    

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */
function scoreboard(cb, inn, innings) {
 
  let num = 0;
    for(let i = 0; i < innings; i++){
      inn = inn + 1;
      `inning ${inn}: ${away}:${inn}    ${home} ${inn}`;
    }


}
console.log(scoreboard());
