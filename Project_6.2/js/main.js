$(document).ready(function () { // does not wait for other items to load

	// Chess task beginning
	
	moveBishop("a3", "b4"); // a function that defines bishop move

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


		checkDifference();

		function checkDifference() {
			// the absolute value (module) of a number
			if (Math.abs(coordinateDifferenceX) == Math.abs(coordinateDifferenceY)) {
				
				$('.answer-gotten').text(`A bishop move is possible...`);
				return true;

			} else {
				
				$('.answer-gotten').text(`Bishop move is not possible!!!`);
				return false;
			}
		}

		return checkDifference();
	}

	console.log(moveBishop("a3", "b4")); // to check what the function returns
	
	// Chess task ending
	
});