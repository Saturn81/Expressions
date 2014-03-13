/*
 * Created by Jeremy Suika: March 13 2014
 * Expressions_Industry
 */
alert("Completed a website for a major client. Had a team working on it. Need to see how much I need to pay them for their time and work."); // the description of the problem. Outlining what we are trying to do.


var juniorPay= prompt("How much an hour do Junior Associates make? \n(Do not put $ sign)");  //This number will be the variable to represent the hourly income for two of the agents. John and Blake.
var seniorPay= prompt("How much an hour do Senior Associates make? \n(Do not put $ sign)");   //This number will be the variable to represent the hourly rate of Jane, a senior agent.


var blakeHours = prompt("How many hours did Blake work on project?");  //this number will be multiplied by the hourly rate of "juniorPay" to equal Blake's Income Total.
var johnHours= prompt("How many hours did John work on the project?");  //this number will be multiplied by the hourly rate of "juniorPay to equal John's Income Total.
var janeHours = prompt("How many hours did Jane work on the project");  //this number will be multiplied by the hourly rate of "seniorPay" to equal Jane's Income Total.
var outSource= prompt("How many outsourced temp agents did you hire?\n (Each outsourced agent gets a flat $400.00 for work done)")  //This number will be multiplied by 400 to see how much the outsourced employees cost in dollars.

var workers =["Blake", blakeHours, "John", johnHours, "Jane", janeHours, outSource, "OutSourced Worker(s)", juniorPay,seniorPay];  //This is the array of the expression.


var howMuchMoney= ( (Number(workers[1]) * Number(workers[8])) +(Number(workers[3]) * Number(workers[8])) + (Number(workers[5]) * Number(workers[9])) +   (Number(workers[6]) * 400) );  //This line represent how much we pay Blake, John, and Jane, and the outside workers.

//the above code for LINE 20: Blakes Income + Jane's Income+ John's Income, + Outsourced Income = "howMuchMoney".

console.log("I paid " + workers[0] + ", " +workers[2]+ ", " + workers[4]+ ", and " +workers[6]+ " " + workers[7]+ "a total of $"+howMuchMoney+ " for the completed website.");   //MAIN TESTER for console

//Line 24: the console log explaining the expression. Used Strings and elements of the Array to format the line of code. 



//console.log(Number(workers[1])+Number(workers[1]));



//console.log("Blake worked a total  of " + workers[3]);

//console.log(Number(workers[1])* Number(workers[1]));  //Just an experiment

