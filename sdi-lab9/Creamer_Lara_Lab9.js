/* Lara Creamer
 SDI 1505
 May 23, 2015 */

//Problem 1
 //global variables
//var myNumber = 5243;
//var numDecimalPlaces= 3;
//
//
////function
//function decimalMove(num, decimal) {
//    var newNumber;
//     if (myNumber === num && numDecimalPlaces === decimal) {
//        num =num.toFixed(decimal);
//
//    }
//    return num
//}
//
// newNumber =decimalMove(myNumber,numDecimalPlaces);
//console.log("The new number to " + numDecimalPlaces + " decimal places is " + newNumber);

//Problem 2
//global variables
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


