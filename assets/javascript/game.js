'use strict';
// Declare variables

let goal = getRandomNumber(120)
let score = 0;
let wins = 0;
let losses = 0;
let buttonValues = generateButtonValues();

// Generate array of button values
function generateButtonValues() {
  let result = [];
  for (let i = 0; i < 4; i++) {
    result.push(getRandomNumber(12));
  }
  return result;
}

// generates random number below n
function getRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

// Scoring function
$('.selector').click(function() {
    score += buttonValues[$(this).index()]
    $("#score").text(score);

    if (score === goal) {
        wins++;
        $("#win-count").text(wins);
        $('<div id="win-loss-banner">You Win!</div>').appendTo($("body"));
        gameEnd();

    } else if (score > goal) { 
    losses++;
    $("#loss-count").text(losses);
    $('<div id="win-loss-banner">You loose!</div>').appendTo($("body"));
    gameEnd();
    }
  })

// Ends game

const gameEnd = function(){
    $('.selector').prop("disabled", true);
    $('<input type="button" value="Start New Game" id="reset-button" />').appendTo($("body"));
    $("#reset-button").click(resetGame);
}

// game reset
const resetGame = function(){
    goal = getRandomNumber(120) 
    buttonValues = generateButtonValues();
    score = 0;
    $("#score").text(score);
    $('.selector').prop("disabled", false);
    $( "#reset-button" ).remove();
    $( "#win-loss-banner" ).remove();
}