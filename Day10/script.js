/**
 Lara Creamer
 SDI 1505
 Day 10
 */
// global variables
//var firstNumber = prompt("Please enter a number to be converted");
//var returnedNumber;

//var numToFormat = parseFloat(prompt("Enter a number to format"));
//var numOfDecPlaces = parseInt(prompt("Enter the number of decimal places"));

var dateOne = new Date("5/23/2015");
var dateTwo = new Date("5/23/2012");
var hOrD = "hours";


//problem functions
//Problem 1 function; Format a number to a certain number of decimals
//function decFormat(argNumber, decPlaces) {



  //  return argNumber.toFixed(decPlaces);

//}

//Problem 2 function convert a string
//function convertedNumber(argNumber) {
  //  while (isNaN(argNumber)) {

        //argNumber = prompt("No I said enter a number");

  //  }
   //return parseFloat(argNumber);



//problem 3 find the hours or days between two dates
function dateDiff(firstDate, secondDate, hoursOrDays) {
    var difference = Math.abs(firstDate - secondDate);
     if(hoursOrDays === "hours") {
         difference = Math.round(difference/1000/60/60)
     } else {
         difference = Math.round(differnece/1000/60/60/24)
     }

    return difference

}
//main code
//returnedNumber = convertedNumber(firstNumber);
//console.log("Th returned number is " , returnedNumber);

//problem 1 function call

//returnedNumber = decFormat(numToFormat, numOfDecPlaces);
//console.log("The formatted number is" , returnedNumber);

//problem 2 function call

returnedNumber = dateDiff(dateOne, dateTwo, hOrD);

console.log("The difference in " +  hOrD + " between "  + dateOne.toDateString() + " and " + dateTwo.toDateString() + "is" + returnedNumber);