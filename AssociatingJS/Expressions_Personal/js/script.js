/*
 * Created by Jeremy Suika: March 12 2014
 * Expressions_Industry
*/


alert("We need to see how many days in the year \nmy family can use the Annual Pass from SeaWorld?");       //What we are trying to figure out in the expression


var wifeWork= prompt("How many days a week does my wife work?","5");

var vacationWeek= prompt("How many weeks off a year does my wife get?");

var vacationDays= vacationWeek*7;


var totalDaysOff =(7- Number(wifeWork)) *(52-Number(vacationWeek)) + +Number(vacationDays);






console.log(totalDaysOff);

//console.log(daysAvailable);