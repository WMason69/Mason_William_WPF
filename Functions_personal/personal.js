//William Mason, Functions Assignment - Personal, Date: 11/20/13

/* Code that calculates what toppings a person might want on
a pizza */

//setup function for pizza ingredient parameters

function pizzaIngredients(pepporoni,sausage,extraCheese,onions){
				  var deluxePizza = ("I would like pepperoni, sausage, extra cheese and onions." +
								  " Also known as The Deluxe.");
				  var normalPizza = "I only want pepperoni and extra cheese. Also known" +
								  " as The Norm.";
						var specialPizza = "I'll have sausage and extra cheese. Better" +
										" known as The Special.";

//conditional statements to determine type of pizza ordered
				if(onions == "no"){console.log("This will not be a deluxe pizza.");

				}else if(sausage == "no"){console.log("This will not be a special or" +
								" deluxe pizza.");

				}else{console.log("This will be a normal pizza.");

				}


								};

//call function and establish arguments using prompts
pizzaIngredients(
				prompt("Please enter either Yes or No if you want pepperoni on your pizza."),
				prompt("Please enter either Yes or No if you want sausage on your pizza."),
				prompt("Please enter either Yes or No if you want extra cheese on your pizza."),
				prompt("Please enter either Yes or No if you want onions on your pizza.")
)