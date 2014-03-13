/*
 * Created by Jeremy Suika: March 13 2014
 * Expressions_Industry
 */


//Completed a website for a huge client. Had a team working on it, and to see how much I have to pay
 //for their time spent.


var blakeHours = prompt("How many hours did blake work on project?\n (junior agents get $20.00 a hour)");
var johnHours= prompt("How many hours did John work on the project?\n (junior agents get $20.00 a hour)");
var janeHours = prompt("How many hours did Jane work on the project?\n (junior agents get $20.00 a hour)");
var outSource= prompt("How many outside temp agents did you hire?\n (Each agent gets a flat $500.00 for work done)")

var workers =["Blake", blakeHours, "John", johnHours, "Jane", janeHours, outSource, "OutSourced Worker(s)"];


console.log(Number(workers[1])+Number(workers[1]));

console.log("Blake worked a total  of " + workers[3]);

//console.log(Number(workers[2])+ //Number(workers[1]));  Just an experiment