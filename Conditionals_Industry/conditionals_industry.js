/* Mason, William, Conditionals_Industry Assignment, 10/17/13, 5:07 AM */

/* Calculate which group of Web Programmers are most productive
in a given week */

/* Establish variable prompts for number of jobs completed in a 1 week
 period by three members of Group A */

var  memberOneGroupA = prompt("How many jobs did member one of Group A " +
				"complete this week?");
console.log("Member one of Group A completed " + memberOneGroupA + " jobs" +
				" this week.");

var  memberTwoGroupA = prompt("How many jobs did member two of Group A " +
				"complete this week?");
console.log("Member two of Group A completed " + memberTwoGroupA + " jobs" +
				" this week.");

var  memberThreeGroupA = prompt("How many jobs did member three of Group A " +
				"complete this week?");
console.log("Member Three of Group A completed " + memberThreeGroupA + " jobs" +
				" this week.");

var totalJobsGroupA = Number(memberOneGroupA) + Number(memberTwoGroupA) +
				Number(memberThreeGroupA);
console.log("The total number of jobs completed this week by Group A " +
				"members is " + totalJobsGroupA + ".");
