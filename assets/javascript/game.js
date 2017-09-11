var generateCrystalNumber = function(htmlElement) {
    randomCrystalNumber = Math.floor(Math.random() * 12) + 1;
    htmlElement.attr("value", randomCrystalNumber);
}



$(document).ready(function() {

    var crystal = {
        total: 0,
        win: 0,
        lose: 0,

    }

    var randomNumberToGuess = Math.floor(Math.random() * 120) + 18;

    $("#random-number").html(randomNumberToGuess);

    generateCrystalNumber($("#crystal-1"));
    generateCrystalNumber($("#crystal-2"));
    generateCrystalNumber($("#crystal-3"));
    generateCrystalNumber($("#crystal-4"));

    $(".crystal").on("click", function() {
        crystal.total = crystal.total + parseInt($(this).attr("value"));
        $("#total-number").html(crystal.total);
        checkWin();

    });


    var checkWin = function() {
        if (crystal.total === parseInt($("#random-number").html())) {
            crystal.win++;
            console.log("you won");
            $("#win-counter").html(crystal.win);
            reset();
            
        } else if (crystal.total > $("#random-number").html()) {
            crystal.lose++;
            console.log("you lost");
            $("#lost-counter").html(crystal.lose);
            reset();
        }
    }

    var reset = function() {
        var randomNumberToGuess = Math.floor(Math.random() * 120) + 18;
        $("#random-number").html(randomNumberToGuess);
        generateCrystalNumber($("#crystal-1"));
        generateCrystalNumber($("#crystal-2"));
        generateCrystalNumber($("#crystal-3"));
        generateCrystalNumber($("#crystal-4"));
        crystal.total = 0;
        $("#total-number").html(crystal.total);
    }



});