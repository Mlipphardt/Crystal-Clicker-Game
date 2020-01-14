$(document).ready(function() {


let goalnumber = 0;
let score = 0;
let losses = 0;
let wins = 0;
let gamesPlayed = 0;
let gameComplete = false;

$("#goalnumbertext");

function addGame(){
    gamesPlayed++;
    $("#gamesPlayedText").text(gamesPlayed);
}

//Function to reset game
function resetGame() {
//Generates goal value, updates information for user
    $("#resultsText").text("")
    goalnumber = (Math.floor(Math.random() * 101) + 19);
    console.log(goalnumber);
    $("#goalnumbertext").text(goalnumber);

//Generates randomized values for each crystal
    $(".crystal").each(function(i, crystal){
        let crystalValue = (Math.floor(Math.random() * 11) + 1);
        $(crystal).attr("value", crystalValue);
    });

//Reset scores
    score = 0;
    gameComplete = false;
}

resetGame();

$(".crystal").on("click", function(){
    if(!gameComplete){
        score += parseInt($(this).attr("value"));
        $("#scoreText").text(score);
        if(score == goalnumber){
            $("#resultsText").text("You win, well done! Click a crystal to play again!");
            wins++;
            $("#winsText").text(wins);
            addGame();
            gameComplete = true;
        } else if(score > goalnumber){
            $("#resultsText").text("B-b-b-busted! Click a crystal to try again!");
            losses++;
            $("#lossesText").text(losses);
            addGame();
            gameComplete = true;
        }
    } else{
    resetGame();
    }
}) })