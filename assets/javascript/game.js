// when all has loaded, start!
$(document).ready(function() {

//declare all variables
var targetNumber = Math.floor(Math.random () * 101) + 19;
var counter = 0;
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var wins = 0;
var losses = 0;

// display random number to guess and wins/losses counter

$("#number-to-guess").html( targetNumber);
$("#wins").html( wins);
$("#losses").html( losses);

// randomize value of crystals. figure out how to set only 4 crystals. 

for (var i = 0; i < Math.floor(Math.random() * numberOptions.length + 1); i++) {
	imageCrystal = $("<img>");
	imageCrystal.addClass("emerald");
	imageCrystal.attr("src", "assets/images/emerald.jpg");
	imageCrystal.attr("data-crystalvalue", numberOptions[i]);
	$("#crystals").append(imageCrystal);
	
	imageCrystal2 = $("<img>");
	imageCrystal2.addClass("rose-quartz");
	imageCrystal2.attr("src", "assets/images/rose-quartz.jpg");
	imageCrystal2.attr("data-crystalvalue", numberOptions[i]);
	$("#crystal2").append(imageCrystal2);

	imageCrystal3 = $("<img>");
	imageCrystal3.addClass("bismuth");
	imageCrystal3.attr("src", "assets/images/bismuth.jpeg");
	imageCrystal3.attr("data-crystalvalue", numberOptions[i]);
	$("#crystal3").append(imageCrystal3);

	imageCrystal4 = $("<img>");
	imageCrystal4.addClass("amethyst");
	imageCrystal4.attr("src", "assets/images/amethyst.jpg");
	imageCrystal4.attr("data-crystalvalue", numberOptions[i]);
	$("#crystal4").append(imageCrystal4);

};

// add event listener for clicking on crystals, adding values and conditionals or when target number is reached. Update wins/losses counters. (Must be a cleaner way of doing this without being so redundant.)
$(".emerald").on("click", function() {
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;
	alert("new score: " + counter);

	if (counter === targetNumber) {
		alert ("You win!");
		wins++;
	} else if (counter > targetNumber) {
		alert ("You lose.");
		losses++;
	}
});

$(".rose-quartz").on("click", function(){
	counter += 10;
	alert("new score: " + counter);

	if (counter === targetNumber) {
		alert ("You win!");
		wins++;
	} else if (counter > targetNumber) {
		alert ("You lose.");
		losses++;
	}
});

$(".bismuth").on("click", function(){
	counter += 3;
	alert("new score: " + counter);
	
	if (counter === targetNumber) {
		alert ("You win!");
		wins++;
	} else if (counter > targetNumber) {
		alert ("You lose.");
		losses++;
	}
});
$(".amethyst").on("click", function(){
	counter += 2;
	alert("new score: " + counter);

	if (counter === targetNumber) {
		alert ("You win!");
		wins++;
	} else if (counter > targetNumber) {
		alert ("You lose.");
		losses++;
	}
});




});
