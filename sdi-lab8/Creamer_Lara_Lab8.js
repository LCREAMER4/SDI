/* Lara Creamer
SDI 1505
May 21, 2015
Lab 8
 */
var myEmail;
var findAt = "@";
var findPeriod = ".";
var noSpaces = " ";
var validEmail;
function subString(argEmail) {

    if (argEmail.indexOf(findAt) === -1) {
        return false;
    }

    if (argEmail.indexOf(findPeriod) === -1) {
       return false;

    }
    if (argEmail.indexOf(noSpaces) > -1) {
        return false;

    } else {
        return true;
    }

}
myEmail=prompt("Please enter your email address.");

validEmail = subString(myEmail);

console.log(validEmail);

