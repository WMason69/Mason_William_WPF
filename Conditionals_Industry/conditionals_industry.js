/* Mason, William, Conditionals_Industry Assignment, 10/17/13, 5:07 AM */

/* Calculate which group of Web Programmers are most productive
in a given week */

/* Establish variable prompts for number of jobs completed in a 1 week
 period by three members of Group A */

var  memberOneGroupA = prompt("How many jobs did member one of Group A " +
				"complete this week?");
console.log("Member One of Group A completed " + memberOneGroupA + " jobs" +
				" this week.");

var  memberTwoGroupA = prompt("How many jobs did member two of Group A " +
				"complete this week?");
console.log("Member Two of Group A completed " + memberTwoGroupA + " jobs" +
				" this week.");

var  memberThreeGroupA = prompt("How many jobs did member three of Group A " +
				"complete this week?");
console.log("Member Three of Group A completed " + memberThreeGroupA + " jobs" +
				" this week.");

var totalJobsGroupA = Number(memberOneGroupA) + Number(memberTwoGroupA) +
				Number(memberThreeGroupA);
console.log("The total number of jobs completed this week by Group A " +
				"members is " + totalJobsGroupA + ".");

alert("The total number of jobs completed this week by Group A " +
				"members is " + totalJobsGroupA + ".");

/* Establish variable prompts for number of jobs completed in a 1 week
 period by three members of Group B */

var  memberOneGroupB = prompt("How many jobs did member one of Group B " +
				"complete this week?");
console.log("Member One of Group B completed " + memberOneGroupB + " jobs" +
				" this week.");

var  memberTwoGroupB = prompt("How many jobs did member two of Group B " +
				"complete this week?");
console.log("Member Two of Group B completed " + memberTwoGroupB + " jobs" +
				" this week.");

var  memberThreeGroupB = prompt("How many jobs did member three of Group B " +
				"complete this week?");
console.log("Member Three of Group B completed " + memberThreeGroupB + " jobs" +
				" this week.");

var totalJobsGroupB = Number(memberOneGroupB) + Number(memberTwoGroupB) +
				Number(memberThreeGroupB);
console.log("The total number of jobs completed this week by Group B " +
				"members is " + totalJobsGroupB + ".");

alert("The total number of jobs completed this week by Group B " +
				"members is " + totalJobsGroupB + ".");

/* Establish variable prompts for number of jobs completed in a 1 week
 period by three members of Group C */

var  memberOneGroupC = prompt("How many jobs did member one of Group C " +
				"complete this week?");
console.log("Member One of Group C completed " + memberOneGroupC + " jobs" +
				" this week.");

var  memberTwoGroupC = prompt("How many jobs did member two of Group C " +
				"complete this week?");
console.log("Member Two of Group C completed " + memberTwoGroupC + " jobs" +
				" this week.");

var  memberThreeGroupC = prompt("How many jobs did member three of Group C " +
				"complete this week?");
console.log("Member Three of Group C completed " + memberThreeGroupC + " jobs" +
				" this week.");

var totalJobsGroupC = Number(memberOneGroupC) + Number(memberTwoGroupC) +
				Number(memberThreeGroupC);
console.log("The total number of jobs completed this week by Group C " +
				"members is " + totalJobsGroupC + ".");

alert("The total number of jobs completed this week by Group C " +
				"members is " + totalJobsGroupC + ".");

/* Conditional statement comparing whether group A has done more work
than group B or vice versa */

if(totalJobsGroupA > totalJobsGroupB){
				    console.log ("Group A worked harder than Group B")
}else{
				console.log("Group B worked harder than Group A");
				alert("Group B worked harder than Group A");
}

/* Conditional statement comparing whether group C has done more work
 than group B or vice versa */

if(totalJobsGroupC > totalJobsGroupB){
				console.log ("Group C worked harder than Group B")
}else{
				console.log("Group B worked harder than Group C");
				alert("Group C worked harder than Group B");
}
