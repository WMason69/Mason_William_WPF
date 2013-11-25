// William Mason, Functions Assignment - Wacky, Date: 11/20/13

//Code to calculate a wacky solution using an anonymous function

var pastaPieces = function(noodles,meatballs, breadSlices){
				var totalMeal = (noodles * meatballs); //expression for returning function
				console.log("The total number of meatballs multiplied by the number" +
								" of noodles is " + totalMeal + "."+ "There are also " + breadSlices + " slices of bread.");

				console.log(totalMeal);//print out to console
				return totalMeal; //spitting out function
};
pastaPieces(7,7,7); //function argument


