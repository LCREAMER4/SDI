/* Lara Creame
SDI 1505
May 14 2015
Day 5 Lecture
 */

//var foo= 1;
//var bar = 2;
//var baz = 3;
//
//console.log(foo + " " + bar + " " + baz);
//global variables
var globalName= "Lara";
var returnedValueVariable;
var checkedName;

function nameFetcher() {

    var myName = prompt("Enter your name", "Lara");
    return myName;

}

function nameChecker (nameArgument) {

    var trueNme;


    if (nameArgument === "Optimus") {
        trueName =true;
    } else {
    trueName = false;
    }

    return trueName;
}
   //main code
    returnedValueVariable = nameFetcher();
checkedName = nameChecker(returnedValueVariable);
if (checkedName) {
    console.log("Greetings and welcome!");
} else{
    console.log("Intruder Alert!");
}























// problem 1
//
//var fullPrice= 12,
//    discountPrice= 5,
//    age;
//
//age = parseInt( prompt(" Enter the customers age: "));
//
//if ( age >= 55 || age< 10) {
//    console.log(" Your discounted price is $" + (fullPrice - discountPrice) +".")
//} else {
//    console.log("No discount for you, please pay $" + fullPrice +".");
//
//}

// Problem 2
// tire variables

//var fL= parseFloat(prompt("Enter the PSI for the front left tire:"));
//    fR=parseFloat(prompt("Enter the PSI for the front right tire:"));
//    bL=parseFloat(prompt("Enter the PSI for the back left tire:"));
//    bR=parseFloat(prompt("Enter the PSI for the back right tire:"));
//
//if(fL ===fR  && bL === bR) {
//    console.log("Your tire pressures are equal in the front and equal in the back.");
//} else {
//    console.log(" Problem with tire pressure, please check them.");
//}

//var frontRight,
//    frontLeft,
//    backRight,
//    backLeft,
//    tirePressure,
//    tireLocation;
//for ( var i = 0; i < 4; i++) {
//
//    if (i === 0) {
//        tireLocation = "frontRight";
//    } else if (i === 1){
//        tireLocation = "frontLeft";
//        else if (i === 2) {
//            tireLocation = "backRight";
//            else if (i === 3){
//               tireLocation = "backLeft";
//            }
//    }
//        }

//    if (i===0) {}
//}      tireLocation = "frontRight";
//} else if (i === 1){
//    tireLocation = "frontLeft";
//else if (i === 2) {
//        tireLocation = "backRight";
//    else
//        {
//            tireLocation = "backLeft";
//
//            if (frontRight === frontLeft && backRight === backLeft) {
//                console.log("Tire pressures are good to go.")
//            }
//        }
//    else
//        {
//            console.log(" The tire pressure needs to be checked.")
//        }
//    }

