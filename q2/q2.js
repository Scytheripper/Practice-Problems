//changed the solution to accomidate multiple winning letters.
function optimalGame() {
  let words = ["cat", "aaa", "calf", "dog", "bear", "bad", "ewok"];
  let startLetters = [];
  let losingLetters = [];

  for (let word of words) {
    if (word.length % 2 === 1) {
      losingLetters.push(word[0]); //Add letter to the losing list.
      if (startLetters.includes(word[0])) {
        //no longer a winning letter so remove.
        startLetters.splice(startLetters.lastIndexOf(word[0]));
      }
    } else {
      //check if this is a losing letter
      if (!losingLetters.includes(word[0])) {
        startLetters.push(word[0]);
      }
    }
  }
  return startLetters;
}

console.log(optimalGame());
