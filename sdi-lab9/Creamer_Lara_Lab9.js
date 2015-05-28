/* Lara Creamer
 SDI 1505
 May 23, 2015 */

Problem 1
 global variables
var myNumber = 5243;
var numDecimalPlaces= 3;


//function
function decimalMove(num, decimal) {
    var newNumber;
     if (myNumber === num && numDecimalPlaces === decimal) {
        num =num.toFixed(decimal);

    }
    return num
}

 newNumber =decimalMove(myNumber,numDecimalPlaces);
console.log("The new number to " + numDecimalPlaces + " decimal places is " + newNumber);

Problem 2
global variables
var myString= "148";
var newNum;


//function
function stringToNum(num) {
    console.log("It is " + isNaN(num) + " that it is a number. ");
    newNum=parseInt(num);

    return newNum

}
stringToNum(myString);
console.log("The string has been converted to the number " + newNum);

////Problem 3
////global variables
//var first =new Date( 2015, 5, 23);
//var second =new Date( 2016, 5, 23);
//var returnedValue;
//var dateTime =prompt("Please enter whether you would like your results in hours or days");
//
////function
//function dated(firstDate, secondDate,time) {
//  dateDiff = firstDate-secondDate;
//
//    if(time=== "hours") {
//        dateDiff = Math.abs(dateDiff/1000/60/60)
//
//    } else if (time=== "days" ) {
//        dateDiff = Math.abs(dateDiff/1000/60/60/24)
//
//    }else {
//        console.log("You did not enter a valid option. Please enter either hours or days");
//    }
//    returnedValue= dateDiff;
//    return returnedValue
//
//}
//dated(first, second, dateTime);
//console.log(returnedValue);


