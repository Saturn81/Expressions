/*
 * Created by Jeremy Suika: March 13 2014
 * Expressions_Industry
 */


//Completed a website for a huge client. Had a team working on it, and to see how much I have to pay
 //for their time spent.

var juniorPay= prompt("How much an hour do you pay Junior Associates? \n(do not put $ sign)");
var seniorPay= prompt("How much an hour do you pay Senior Associates?");


var blakeHours = prompt("How many hours did blake work on project?");
var johnHours= prompt("How many hours did John work on the project?");
var janeHours = prompt("How many hours did Jane work on the project");
var outSource= prompt("How many outside temp agents did you hire?\n (Each Outsourced agent gets a flat $400.00 for work done)")

var workers =["Blake", blakeHours, "John", johnHours, "Jane", janeHours, outSource, "OutSourced Worker(s)", juniorPay,seniorPay];


var howMuchMoney= (   (Number(workers[1]) * Number(workers[8])) +     (Number(workers[3]) * Number(workers[8])) +  (Number(workers[5]) * Number(workers[9])) +   (Number(workers[6]) * 400)              );



console.log("I paid " + workers[0] + ", " +workers[2]+ ", " + workers[4]+ ", and " +workers[6]+ " " + workers[7]+ "a total of $"+howMuchMoney+ " for the completed website.");   //MAIN TESTER for console





//console.log(Number(workers[1])+Number(workers[1]));



//console.log("Blake worked a total  of " + workers[3]);

//console.log(Number(workers[1])* Number(workers[1]));  //Just an experiment



                                //Bad but used as a reminder
//console.log((workers[1])+(workers[1])); The wrong way to do it, causes the hours to be displayed wrong.