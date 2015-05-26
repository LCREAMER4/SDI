/* Lara Creamer
SDI 1505
Day 10 Problem solving
 */
//Problem Solving
//global variables

//global variables
var numArray = [3,6,7,9,23,42,22,50];
var currentNum = 111;
var returnedNumber;

function bubbleSort(argArray) {
//variables
    var num1,
        num2,
        holder;
//loop through the array
    for (var newElement in argArray) {
        for (var element in argArray) {

            element = parseInt(element);

//assign array elements to variables
            num1 = argArray[element];
            num2 = argArray[element + 1];
            //compare to see which is greater
            if (num1 > num2) {
                holder = num1;
                argArray[element] = num2;
                argArray[element + 1] = num1;
            }
        }
    }
    return "No greater number in the array."
}

function findNumber (argArray, argNumber) {
    var nextGreatest = 0;
    argArray = bubbleSort();
    console.log(argArray);

    for (var i = 0; i < argArray.length; i++) {
        if (argNumber < argArray[i]) {
            return argArray[i];

        }

    }
return nextGreatest;

}
returnedNumber = findNumber(numArray, currentNum);
console.log("the next biggest number is " + returnedNumber);




















////functions
//function yearsBetween() {
//    var yearEntered = parseInt(prompt("What year would you lik to use?"));
//    var today = new Date();
//    today = today.getFullYear();
//    var difference = today - yearEntered;
//    return difference
//
//}
////main code
//returnedNumber = yearsBetween();
//console.log("The difference in the years is " + returnedNumber);


// global variables
//var firstNumber = prompt("Please enter a number to be converted");
//var returnedNumber;

//var numToFormat = parseFloat(prompt("Enter a number to format"));
//var numOfDecPlaces = parseInt(prompt("Enter the number of decimal places"));

//var dateOne = new Date("5/23/2015");
//var dateTwo = new Date("5/23/2012");
//var hOrD = "hours";


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
//function dateDiff(firstDate, secondDate, hoursOrDays) {
 //   var difference = Math.abs(firstDate - secondDate);
//     if(hoursOrDays === "hours") {
   //      difference = Math.round(difference/1000/60/60)
 //    } else {
 //        difference = Math.round(difference/1000/60/60/24)
//     }

//    return difference

//}
//main code
//returnedNumber = convertedNumber(firstNumber);
//console.log("Th returned number is " , returnedNumber);

//problem 1 function call

//returnedNumber = decFormat(numToFormat, numOfDecPlaces);
//console.log("The formatted number is" , returnedNumber);

//problem 2 function call

//returnedNumber = dateDiff(dateOne, dateTwo, hOrD);

//console.log("The difference in " +  hOrD + " between "  + dateOne.toDateString() + " and " + dateTwo.toDateString() + "is" + returnedNumber);