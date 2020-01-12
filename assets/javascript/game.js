$(document).ready(function() {


let goalnumber = 0;
let score = 0;

$("#goalnumbertext");

//Function to reset game
function resetGame() {
//Generates goal value, updates information for user
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
}

resetGame();

$(".crystal").on("click", function(){
    score += parseInt($(this).attr("value"));
    $("#scoreText").text(score);
    if(score == goalnumber){
        alert("You win, well done!")
        resetGame();
    } else if(score > goalnumber){
        alert("B-B-B-Busted! Try again!")
        resetGame();
    }
}

)



})