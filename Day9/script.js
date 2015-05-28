/**
 Lara Creamer
 SDI 1505
 Day 9
 */

function goodDates() {
    var myDate = "5/23/2016";
    console.log(myDate);
    var newDate = new Date(2015, 4, 23);
    console.log(newDate);
    var secondDate = new Date(myDate);
    console.log(newDate);
    console.log(secondDate);
    dateDiff = newDate - secondDate;
    dateDiff = Math.abs(dateDiff / 1000 /60 / 60 / 24);
    console.log(dateDiff);

   //switch(dayOfWeek) {
   //    case 0 :
   //        dayOfWeek = "Sunday";
   //        break;
   //    case 1:
   //        dayOfWeek = "Monday";
   //        break;
   //    case 2:
   //        dayOfWeek = "Tuesday";
   //        break;
   //    case 3:
   //        dayOfWeek = "Wednesday";
   //        break;
   //    case 4:
   //        dayOfWeek = "Thursday";
   //        break;
   //    case 5:
   //        dayOfWeek = "Friday";
   //        break;
   //    case 6:
   //        dayOfWeek = "Saturday";
   //        break;
   //}
   // console.log(dayOfWeek);


}





function mathMethods(argPrompt) {
    while(isNaN(argPrompt)) {
        argPrompt = prompt("Enter a number please:");
    }

        var newAge = parseInt(argPrompt);
        console.log(newAge);


}
//main code
goodDates();



//var myPrompt = prompt("Enter your age:");
//mathMethods(myPrompt);














//global variables
var myEmail = "lcre.amer@fullsail.com";
var emailTrueOrFalse;
var stringList= "a,c,b,c,d,e+f,g,h";
var first = ",";
var second = "/";
//problem functions
//First function check an email address
function checkEmail(argEmail) {
    var goodEmail = false;
    var atSymbol = argEmail.indexOf("@");
    var dotSymbol = argEmail.lastIndexOf(".");
    var noSpaces = argEmail.indexOf (" ");
    var lastAt = argEmail.lastIndexOf("@");

  //check for @ symbol
    if(atSymbol === lastAt && atSymbol> -1) {
       goodEmail = true;
    } else {
        return false;
    }
    if(dotSymbol > atSymbol) {
        goodEmail = true;
    } else {
        return false;
    }
    if (noSpaces ==-1 ) {
        goodEmail = true;
    } else {
        goodEmail = false
    }

return goodEmail

}
//function stringSep(oldString, firstSep, newSep) {
//    var newString = "";
//
//    for (var i = 0; i < oldString.length; i++) {
//
//
//        if (oldString.substr(i, 1) === firstSep) {
//            newString = newString + newSep;
//        } else {
//            newString = newString + oldString.substr(i, 1);
//        }
//    }
//    return newString;
//}
//
////Main code
emailTrueOrFalse = checkEmail(myEmail);
console.log("It is " + emailTrueOrFalse + " that this email is valid");
//    returnedString = stringSep(stringList, first, second);
//    console.log("The new string is " + returnedString);
