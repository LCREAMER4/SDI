/* Lara Creamer
SDI 1505
May 21, 2015
Lab 8
 */
var myEmail;
var findAt = "@";
var findPeriod = ".";
var noSpaces = " ";

function subString(argEmail) {

    if ((argEmail.indexOf(findAt) === -1) || (argEmail.indexOf(findPeriod) === -1) || (argEmail.indexOf(noSpaces) > -1)) {
        console.log("Your email is incorrect, please enter a valid email address.");
    } else {
        console.log("Your email address is correct.")
    }

}
myEmail=prompt("Please enter your email address.");

subString(myEmail);


