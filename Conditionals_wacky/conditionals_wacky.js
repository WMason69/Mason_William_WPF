/*Conditionals Assignment_Wacky_ William Mason_ Date: 11/13/13 */

/*Write a program that calculates how many gummy bears a group of
 green elephants can eat in a day*/

// -------------------- Begin Program -------------------------

var unitWeight = 1000;

var greenEl1 = prompt("Please enter the weight of Green Elephant #1 in \n" +
				"pounds.");
//This code prints out user input data to console
console.log("The weight of Green Elephant #1 is " + greenEl1 + " pounds.");

//This code prints out user feedback for data input using the alert function
alert("The weight of Green Elephant #1 is " + greenEl1 + " pounds.");

/*this code declares and defines variable about green elephant #2
 weight using a prompt*/

var greenEl2 = prompt("Please enter the weight of Green Elephant #2 in \n" +
				"pounds.");
//This code prints out user input data to console
console.log("The weight of Green Elephant #2 is " + greenEl2 + " pounds.");

//This code prints out user feedback for data input using the alert function
alert("The weight of Green Elephant #2 is " + greenEl2 + " pounds.");

/*this code declares and defines variable about green elephant #3
 weight using a prompt*/

var greenEl3 = prompt("Please enter the weight of Green Elephant #3 in \n" +
				"pounds.");
//This code prints out user input data to console
console.log("The weight of Green Elephant #3 is " + greenEl3 + " pounds.");

//This code prints out user feedback for data input using the alert function
alert("The weight of Green Elephant #3 is " + greenEl3 + " pounds.");

/*this code declares and defines variable about green elephant #4
 weight using a prompt*/

var greenEl4 = prompt("Please enter the weight of Green Elephant #4 in \n" +
				"pounds.");
//This code prints out user input data to console
console.log("The weight of Green Elephant #4 is " + greenEl4 + " pounds.");

//This code prints out user feedback for data input using the alert function
alert("The weight of Green Elephant #4 is " + greenEl4 + " pounds.");

/*This code defines and declares number of eating hours in a day using a
prompt*/

var eatHoursDay = prompt("Please enter the numbers of hours the elephants \n" +
				" spend eating per day.");

/*This code prints to the console the user input number of hours the elephants
spend eating per day*/
console.log("The number of hours the elephants spend eating each day is " +
				eatHoursDay + ".");

/*This code alerts the user to the number of hours the elephants spend eating
 per day*/
alert("The number of hours the elephants spend eating each day is " +
				eatHoursDay + ".");

/*declare and define variable using an expression for gummy bears eaten
per hour per 1000 pounds of elephant*/

gumEatPerHrPerThPound = unitWeight/4;
console.log("Each elephant eats " + gumEatPerHrPerThPound + " gummy bears " +
				"per hour" + " for every " + unitWeight + " lbs of weight.");

/*This code alerts the user to the number of gummy bears eaten
 per hour per 1000 pounds of elephant*/
alert("Each elephant eats " + gumEatPerHrPerThPound + " gummy bears " +
				"per hour" + " for every " + unitWeight + " lbs of weight.");

/*------ Code that calculates how many gummy bears each elephant ate
				during the course of a day ---------------------------*/

//calculate gummy bear consumption total for green elephant 1/
var totalGreenEl1GumAte = greenEl1 / unitWeight / gumEatPerHrPerThPound
				* eatHoursDay;
//print expression result to console
console.log("The total number of gummy bears eaten by green elephant #1 \n" +
				" in a day is " + totalGreenEl1GumAte + ".");
//give user feedback
console.log("The total number of gummy bears eaten by green elephant #1 \n" +
				" in a day is " + totalGreenEl1GumAte + ".");