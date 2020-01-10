$(document).ready(function() {


let goalnumber = 0;

$("#goalnumbertext");



goalnumber = (Math.floor(Math.random() * 101) + 19);
console.log(goalnumber);
$("#goalnumbertext").text(goalnumber);

$('.testimonial').each(function(i, obj) {
    //test
});

$("#goaltext").text(goalnumber);


// goalnumber = (math.)
$(".crystal").each(function(i, crystal){
    let crystalValue = (Math.floor(Math.random() * 11) + 1);
    $(crystal).attr("value", crystalValue);
});

})