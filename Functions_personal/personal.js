//William Mason, Functions Assignment - Personal, Date: 11/20/13

/* Code that calculates what toppings a person might want on
a pizza */

//call function and establish arguments using prompts
pizzaIngredients(
				prompt("Please enter either Yes or No if you want pepperoni on your pizza."),
				prompt("Please enter either Yes or No if you want sausage on your pizza."),
				prompt("Please enter either Yes or No if you want cheese on your pizza."),
				prompt("Please enter either Yes or No if you want onions on your pizza.")
);

// setup return value from function

//setup function for pizza ingredient parameters
var pizzaType = pizzaIngredients(); //set up return for print use in global page or another function
function pizzaIngredients(pepperoni,sausage,cheese,onions){
				  var sausagePizza = ("I would like a sausage pizza." +
								  " Also known as The Locomotive.");
				  var cheesePizza = "I only want a cheese pizza. Also known" +
								  " as The Norm.";
						var pepperoniPizza = "I'll have a pepperoni pizza. Better" +
										" known as The Bullet.";
						var unusualPizza = "I know it's unusual but I only want crust and sauce.";

						var meatPizza = "I want a pizza with the all the toppings. Also known as" +
										" The Deluxe.";

//conditional statements to determine type of pizza ordered
				if(pepperoni == "yes"){console.log(pepperoniPizza);

				}else if(sausage == "yes"){console.log(sausagePizza);

				}else if(cheese == "yes"){console.log(cheesePizza);

				}else if(onions == "yes"){console.log(meatPizza);

				}else{console.log(unusualPizza);

				}

				return pizzaType; //spit out value from function


}
console.log(pizzaType); //use returned value in other functions or expressions




