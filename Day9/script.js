/**
 Lara Creamer
 SDI 1505
 Day 9
 */

//global variables
var myEmail = "lcre.amer@fullsail.com";
var emailTrueOrFalse;

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


//Main code
emailTrueOrFalse = checkEmail(myEmail);
console.log("It is " + emailTrueOrFalse + " that this email is valid");