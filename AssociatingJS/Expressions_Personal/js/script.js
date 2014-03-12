/*
 * Created by Jeremy Suika: March 12 2014
 * Expressions_Personal
*/


alert("We need to see how many days in the year \nmy family can use the Annual Pass from SeaWorld?");       //What we are trying to solvein the expression


var wifeWork= prompt("How many days a week does my wife work?","5");

var vacationWeek= prompt("How many weeks off a year does my wife get?");

var vacationDays= vacationWeek*7;

var busyDays= prompt("Let's assume there are just some random days where things happen preventing us from going to the park, how many of those random days happen a month?")


var totalDaysOff =(7- Number(wifeWork)) *(52-Number(vacationWeek)) + +Number(vacationDays);






console.log("Counting regular days off, and vacation days, there are a total of " +totalDaysOff+ " days to go to SeaWorld");

//console.log(daysAvailable);