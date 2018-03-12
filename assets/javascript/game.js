'use strict';
// Declare variables

let goal = Math.floor((Math.random() * 120) + 1);
let firstButton = Math.floor((Math.random() * 12) + 1);
let score = 0;
let wins = 0;
let losses = 0;

console.log(goal, score, firstButton, wins);

// Scoring function

$("#button-one").click(function () {
    score += firstButton;
    $("#score").text(score);

    if (score === goal) {
        wins ++;
        $("#win-count").text(wins);
        console.log('you win!');
        gameEnd();

    } else if (score > goal) { 
    losses ++;
    $("#loss-count").text(losses);
    console.log("you loose!");
    gameEnd ();

    }
});

const gameEnd = function(){
    $("#button-one").prop("disabled", true);
    $('<input type="button" value="Start New Game" id="reset-button" />').appendTo($("body"));
    $("#reset-button").click(resetGame);
}

// game reset

const resetGame = function (){
    goal = Math.floor((Math.random() * 120) + 1);
    firstButton = Math.floor((Math.random() * 12) + 1);
    score = 0;
    $("#score").text(score);
    $("#button-one").prop("disabled", false);
    $( "#reset-button" ).remove();
}




