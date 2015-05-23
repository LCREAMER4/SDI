/* Lara Creamer
SDI 1505
May 21, 2015
Lab 8
 */
//var myEmail;
//var findAt = "@";
//var findPeriod = ".";
//var noSpaces = " ";
//
//function subString(argEmail) {
//
//    if ((argEmail.indexOf(findAt) === -1) || (argEmail.indexOf(findPeriod) === -1) || (argEmail.indexOf(noSpaces) > -1)) {
//        console.log("Your email is incorrect, please enter a valid email address.");
//    } else {
//        console.log("Your email address is correct.")
//    }
//
//}
//myEmail=prompt("Please enter your email address.");
//
//subString(myEmail);

var string1 = "1 2 3 4 5";
var sep1 = "-";
var sep2 = "/";
var hold;
var newList;
var num1;
var num2;

function stringSplit(argString) {
    for (var i = "-"; i < argString.length;i++) {
        for (var x = "/"; x < argString.length; x++){
        if (argString[i] < argString[x]){
            hold = argString([i]);
            argString[i] = argString [i+1];
            argString[i+1] = hold
        }



        }



        }

}
newList =stringSplit(string1);
