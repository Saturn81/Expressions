/*
 * Created by Jeremy Suika: March 12 2014
 * Expressions_Personal
*/


alert("We need to see how many days in the year \nmy family can use the Annual Pass from SeaWorld?");       //What we are trying to solve in the expression


var wifeWork= prompt("How many days a week does my wife work?","5"); //my wife will work a certain amount of days a week, this is the input prompt for that. I put 5, but that can be changed.

var vacationWeek= prompt("How many weeks off a year does my wife get?");  //to see how many weeks off Wife gets in a year, this is the input prompt for that.

var vacationDays= vacationWeek*7;  // multiply the amount of weeks of vacation by 7 to equal how many days of vacation each year. EXAMPLE 3 weeks =21 days, 2 weeks = 14 days

var busyDays= prompt("Let's assume there are just some random days where things happen preventing us from going to the park, how many of those random days happen a month?")  //Life happens, so this prompt subtracts the days where we can't go to the park (average a month)

var totalBusyDays= 12*busyDays    //the random busy days for no SeaWord, multiplied by 12, to represent the 12 months of a year; Total days for the year where life happens.


var totalDaysOff =(7- Number(wifeWork)) *(52-Number(vacationWeek)) + +Number(vacationDays);  //total days off = the number of days a week she can work X weeks not on vacation +  the vacation days. This represents almost all the days off.

var completeDaysOff = totalDaysOff-totalBusyDays; //the formula above was so large I added the RANDOM DAYS OFF to the totalDaysOff;  This subtracts the random days off from the total in the above line to show the exact and final days available.





console.log("Counting regular days off, and vacation days, there are a total of "+completeDaysOff+ " days to go to SeaWorld");  //explaining the expression and seeing the total days to do to SeaWorld

//console.log(totalBusyDays);  a extra prompt to test code.