/*Conditionals Assignment_Industry_ William Mason_ Date: 11/13/13 */

/* Write code that determines which client produced the most money for
				our web design firm in a one year period*/

//declaring and defining variable for Client A
var clientA=prompt("Please enter How many jobs we did for Client A in \n" +
				"a one year period");
// print out user input from prompt to console
console.log("We completed " + clientA + " jobs for Client A over the past" +
				" year.");

//define and declare amount of average  dollar cost per job for client A
var avgJobCostClientA=prompt("Please enter the per job cost for" +
				" Client A projects");
//print out user prompted input for variable avgJobCostClient A
console.log("We charged " + "$" + avgJobCostClientA + " per project for Client A.");
//established variable and created expression to calculate total cost earned from client A

var totEarnedClientA=clientA * avgJobCostClientA;
//print out to console total earnings received from Client A this year
console.log("Our firm earned a total of " + "$" + totEarnedClientA + " from Client A this year.");
//declaring and defining variable for Client B

var clientB=prompt("Please enter How many jobs we did for Client B in \n" +
				"a one year period");
// print out user input for clientB prompt to console
console.log("We completed " + clientB + " jobs for Client B over the past" +
				" year.");
//define and declare amount of average  dollar cost per job for client B
var avgJobCostClientB=prompt("Please enter the per job cost for" +
				" Client B projects");
//print out user prompted input for variable avgJobCostClient B
console.log("We charged " + "$" + avgJobCostClientB + " per project for Client B.");
//established variable and created expression to calculate total cost earned from client B

var totEarnedClientB=clientB * avgJobCostClientB;
//print out to console total earnings received from Client B this year
console.log("Our firm earned a total of " + "$" + totEarnedClientB + " from Client B this year.");

//declaring and defining variable for Client C
var clientC=prompt("Please enter How many jobs we did for Client C in \n" +
				"a one year period");
// print out user input for clientC prompt to console
console.log("We completed " + clientC + " jobs for Client C over the past" +
				" year.");

//define and declare amount of average  dollar cost per job for client C
var avgJobCostClientC=prompt("Please enter the per job cost for" +
				" Client C projects");
//print out user prompted input for variable avgJobCostClient C
console.log("We charged " + "$" + avgJobCostClientC + " per project for Client C.");

//established variable and created expression to calculate total cost earned from client C
var totEarnedClientC=clientC * avgJobCostClientC;

//print out to console total earnings received from Client C this year
console.log("Our firm earned a total of " + "$" + totEarnedClientC + " from Client C this year.");

/*conditional statement testing whether we earned more from Client A or
Client B*/
if(totEarnedClientA > totEarnedClientB){
				console.log("We earned more from Client A than from Client B")
} else{
				console.log("Client B was more profitable than Client A")
}

/*conditional statement testing whether we earned more from Client B or
 Client C*/
if(totEarnedClientB > totEarnedClientC){
				console.log("We earned more from Client B than from Client C")
} else{
				console.log("Client C was more profitable than Client B")
}

/*Tertiary statement comparing two statements and resolving both to boolean values for
for comparison*/

if(totEarnedClientA > totEarnedClientB && totEarnedClientB > totEarnedClientC){
		console.log("Client A was more profitable to our firm than either Clients B or C")
}else{
				console.log("Client C was more profitable to our firm than we thought")
}

//------------------ End of Code -------------------------------/