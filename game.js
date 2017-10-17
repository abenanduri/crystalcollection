$(document).ready(function () {
	



var random_number;
var losses = 0;
var wins = 0;
var counter = 0;

var startGame = function() {

$("#crystals").empty();	

random_number = Math.floor(Math.random() * 99) + 30; 

$("#result").html("Add To This Number: " + random_number);


crystal = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];



for(var i = 0; i < crystal.length; i++) {
	var numbers = numbers = Math.floor(Math.random() * 12) +2;
	var colorCrystal = $("<img>");
	colorCrystal.attr('data-num', numbers);
	colorCrystal.attr('src', crystal[i]);
	colorCrystal.attr('class', 'crystalNumber');
	$("#crystals").append(colorCrystal);
	// console.log(numbers)

};
}; 

startGame();



$(document).on("click", ".crystalNumber", function (){ 

	
	var num = parseInt($(this).attr('data-num'));
	
	counter += num;

	$("#addition").html(counter);

	console.log(counter);

	if (counter > random_number) {
		$("#win-lose").html("YOU LOST!!"); 
		losses++;
		$("#loss").html(losses);
		startGame(); 
		counter = 0;
		

	}
	else if (counter === random_number) {
		$("#win-lose").html("YOU WIN!!");		
		wins++;
		$("#win").html(wins);
		startGame();
		counter = 0; 

	}

	
	

});




});