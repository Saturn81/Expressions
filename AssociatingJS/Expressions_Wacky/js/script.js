/*
 * Created by Jeremy Suika: March 12 2014
 * Expressions_Personal
 */



alert("I put new sod down for my front lawn. \nThere is a lot of old grass, dirt, leaves \nand other lawn junk that needs to be disposed of.");       //describing the expression, this is the first part.

alert("I find out that the garbage and lawn removal company will only pick up 15 bags of waste a week. \nProblem is there lots of bags of lawn waste.")  //The second part explaining the expression, its a long story so I need to break it up.

alert("I have to see how many weeks it will take to get rid of all the lawn waste I have collected in trash bags......")  //last part, but most important, it states I need to see how many weeks I need to wait till all my lawn trash bags are picked up.


var bagsTrash= prompt("How many trash bags of sod did I use for the lawn","100");  //This prompt will be for the variable of how much bags of trash I collected. Important data for formula.

var truckFriend= prompt("How many times can I borrow my friends truck and haul to the dump (truck can hold 20 bags of trash?)"); //This number will be multiplied by 20. EXP: 2 X 20= 40 bags, that will be subtracted from the total bags collected from the above prompt.

var carUse= prompt("How many times do I use my own car and drive to the dump?(my car can hold 7 bags of trash)"); //This number will be multipled by 7. EXP "2" X 7 =14 bags collected from my car, to be subtracted with the truck total ABOVE.

var truckTotal= truckFriend*20;                   //the formula of how many bags the truck will take, it will be subtracted from the bag total.

var carTotal= carUse*7;                           //another variable that will be subtracted from the Total Bags collected.

var transportTotal= truckTotal+carTotal;         //the total amount of bags of trash from the car and truck.

var weeksTrash= (bagsTrash-transportTotal)/15;   //All the trash collected -all the transported bags / the amount the trashman will pick up each week = how many times they have to pick up trash



//console.log(weeksTrash);                       want to see the answer to the formula before I add the ceiling option.

var weeksTrash=(Math.ceil(weeksTrash)); //The same formula but with a ceiling option. If the answer was uneven like 3.5, it needed to be rounded up to 4, because they can't pick up 3.5 days, it must be either 3 or 4, not .5






console.log("I might use someone else's truck and my own car, but it would take "+weeksTrash+ " week(s) for the trash bags to be picked up.");  //the formula in the console form.

