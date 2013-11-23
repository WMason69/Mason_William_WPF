/* William Mason, Functions Assignment - Industry, November 20, 2013 */


/*Code that calculate average miles per gallon between three vehicles*/

//set up basic function structure and parameter
function avgMpg(vehicleA, vehicleB, vehicleC){

//sep up variable to hold expression using user input arguments

var averageMilesGallon = (Number(vehicleA) + Number(vehicleB) + Number(vehicleC))/3

// console print out of each vehicles miles per gallon
				console.log("Vehicle A gets " + Number(vehicleA) + " miles per gallon.");
				console.log("Vehicle B gets " + Number(vehicleB) + " miles per gallon.");
				console.log("Vehicle C gets " + Number(vehicleC) + " miles per gallon.");

// console print out of all vehicles combined miles per gallon
				console.log("The average miles per gallon of Vehicles A, B and C is " +
								averageMilesGallon +	" mpg.");


}