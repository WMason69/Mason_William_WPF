/*Conditionals Assignment_Personal_William Mason_ Date: 11/13/13 */

/* Write a calculation that determines how many meatballs to put in a
				adjustable size spaghetti recipe with user determined number of
				meatballs being used for every user determined meal size oz of
				spaghetti noodles and sauce */

//declare and user defined noodles and sauce portion size variable/
var nooSauSize = prompt("Please enter the noodles and sauce meal size \n" +
				"in number of oz.");

//print out to console user entered data
console.log("The noodles and sauce meal size is " + nooSauSize + " oz.");
alert("The noodles and sauce meal size is " + nooSauSize + " oz.");

/*declare variable for number of meatballs that is user defined through
a prompt function*/
var numMeatballsPortion = prompt("Please enter the number of meatballs that you will\n" +
				" use for each " + nooSauSize + " oz." +  " of noodles and sauce.");

/*print out user entered information to console and give feedback to user
using the alert function*/
console.log("The number of meatballs that you will use for each " + nooSauSize +
				" oz." + " of noodles and sauce is " + numMeatballsPortion + ".");
alert("The number of meatballs that you will use for each " + nooSauSize + " oz."  +
				" of noodles and sauce is " + numMeatballsPortion + ".");

/*declare variable and define as an expression that calculates number of
portions in a meal size*/

var avgPortSize = Number("4");
console.log("The average portion size is " + avgPortSize + " oz.");

//define variables for large and small meal sizes using expressions
var largeMeal = nooSauSize*avgPortSize >= Number(80 + " oz.");
var smallMeal = nooSauSize/avgPortSize <= Number(3 + " oz.");


