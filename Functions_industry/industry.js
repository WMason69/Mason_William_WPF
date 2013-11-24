/* William Mason, Functions Assignment - Industry, November 20, 2013 */

var combinedMpg = avgMpg (prompt("Please enter miles per gallon for Vehicle A."), prompt("Please enter miles per gallon for Vehicle B."),
				prompt("Please enter miles per gallon for Vehicle C.")); //storing the return value of function

/*Code that calculate average miles per gallon between three vehicles*/

//set up basic function structure and parameter
function avgMpg(vehicleA, vehicleB, vehicleC){

//sep up variable to hold expression using user input arguments

var averageMilesGallon = (Number(vehicleA) + Number(vehicleB) + Number(vehicleC))/3;

// console print out of each vehicles miles per gallon
				console.log("Vehicle A gets " + Number(vehicleA) + " miles per gallon.");
				console.log("Vehicle B gets " + Number(vehicleB) + " miles per gallon.");
				console.log("Vehicle C gets " + Number(vehicleC) + " miles per gallon.");

// console print out of all vehicles combined miles per gallon
				console.log("The average miles per gallon of Vehicles A, B and C is " +
								averageMilesGallon +	" mpg.");

/*series of if else conditions and console print outs related to evaluated
conditions*/
				if(vehicleA >= averageMilesGallon){console.log("Vehicle A meets the " +
								"minimum required miles per gallon.");
				}else{console.log("Vehicle A does not meet the	minimum required miles per gallon.");

				}if(vehicleB >= averageMilesGallon){console.log("Vehicle B meets the " +
								"minimum required miles per gallon.");
				}else{console.log("Vehicle B does not meet the	minimum required miles per gallon.");

				}if(vehicleC >= averageMilesGallon){console.log("Vehicle C meets the " +
								"minimum required miles per gallon.");
				}else{console.log("Vehicle C does not meet the	minimum required miles per gallon.");

				}
				/*if statement using logical operator to return Boolean values to see if Vehicle A
				 gas mileage is the best or less than I thought */
				if(vehicleA > vehicleB && vehicleA > vehicleC){console.log("Vehicle A gets the best gas mileage.");

				}else{console.log("Vehicle A's gas mileage is not as good as I thought.")
				}
				return averageMilesGallon; //function spitting the info out
}

console.log(combinedMpg); /*print returned value to console and value
 can be used later in a different function or expression*/

console.log("---------------end of functions industry---------");
