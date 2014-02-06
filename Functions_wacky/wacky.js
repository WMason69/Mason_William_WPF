// William Mason, Functions Assignment - Wacky, Date: 11/20/13

//Code to calculate a wacky solution using an anonymous function

var pastaPieces = function(noodles,meatballs, breadSlices){
				var totalMeal = (noodles / meatballs); //expression for returning function
				var avgNoodlePortion = "Please enter the noodle portion size.";
				console.log("The total number of meatballs divided by the number" +
								" of noodles is " + totalMeal + "."+ " There are also " + breadSlices + " slices of bread.");



				console.log(totalMeal);//print out to console

				//ternary statement checking balance of meal
				(noodles/Number(avgNoodlePortion) >= meatballs && meatballs == breadSlices) ? console.log("This is an equally portioned meal.") :
								console.log("This meal could have been more balanced.");

				return totalMeal; //spitting out function

};

pastaPieces(//function argument with user input parameters
										prompt("Please enter the number of noodles used."),
          prompt("Please enter the number of meatballs going with noodles."),
										prompt("Please enter the number of bread slices."));


