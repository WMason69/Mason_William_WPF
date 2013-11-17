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

/*declare variable and define as an expression that calculates number of
 portions in a meal size*/

var avgPortSize = prompt("Please enter the average portion size in oz.");
console.log("The average portion size is " + avgPortSize + " oz.");

/*declare variable and define using an expression for number of meatballs
that will be used for various meal sizes*/
var numMeatballsPortion = nooSauSize/avgPortSize*2;
console.log("The number of meatballs that you will use for each " + nooSauSize +
				" oz. portion of noodles and sauce is " + numMeatballsPortion + ".");

/*print out user entered information to console and give feedback to user
using the alert function*/
alert("The number of meatballs that you will use for each " + nooSauSize + " oz."  +
				" of noodles and sauce is " + numMeatballsPortion + ".");

//define variables for large and small meal sizes using expressions
var largeMeal = nooSauSize/avgPortSize >= 10;
var smallMeal = nooSauSize/avgPortSize <= 3;

// conditional statement to declare size of meal
if(largeMeal){
				console.log("We ate a very large meal.");
}else if(smallMeal){
								console.log("We ate a small meal which means we did not eat much.");
}else{
								console.log("Our family ate an average size meal.")
}

// ------------------- End of Personal Assignment ----------------
