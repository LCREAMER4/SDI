/* Lara Creamer
 SDI 1505
 May 23, 2015 */

 //global variables
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

