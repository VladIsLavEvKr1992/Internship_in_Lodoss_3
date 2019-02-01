$(document).ready(function () { // does not wait for other items to load
	
	const currentMoveBishop = moveBishop("a3", "b4"); // a function that defines bishop move

	showResult(currentMoveBishop); // a function that displays the results on the screen
		
});


function moveBishop(currentPosition, supposedPosition) {
	var currentPositionX = currentPosition[0]; // a bishop current position on X axis
	var currentPositionY = currentPosition[1]; // a bishop current position on Y axis

	var supposedPositionX = supposedPosition[0]; // a bishop supposed position on X axis
	var supposedPositionY = supposedPosition[1]; // a bishop supposed position on Y axis

	var coordinateDifferenceX; // coordinate difference on X axis
	var coordinateDifferenceY; // coordinate difference on Y axis

	coordinateDifferenceX = 
		supposedPositionX.charCodeAt() - currentPositionX.charCodeAt(); // string to ASCII code

	coordinateDifferenceY = 
		supposedPositionY.charCodeAt() - currentPositionY.charCodeAt(); // string to ASCII code

	// the absolute value (module) of a number
	return Math.abs(coordinateDifferenceX) == Math.abs(coordinateDifferenceY);
}


function showResult(currentResult) {
	if (currentResult == true) {
		$('.answer-gotten').text(`A bishop move is possible...`);
	} else if (currentResult == false) {
		$('.answer-gotten').text(`Bishop move is not possible!!!`);
	} else {
		$('.answer-gotten').text(`unexpected type!!!`);
	}
}

console.log(moveBishop("a3", "b4"));