// SDI 1311
//  Day 8 Lecture
//  Like cats, we're going to play with strings

var ourString;

//functions
function initialCaps(argString) {
    var newString;
    var strArray;
    var currentWord;
    var newWord = "";
    var currentChar= "";

    //uppercase everything
    newString = argString.toUpperCase();

    strArray = newString.split(" ");

    for (var each in strArray) {

        currentWord = strArray[each];

        for (var char in strArray[each]) {
            if (char != 0) {
               currentChar = currentWord[char].toLowerCase();
                newWord = newWord + currentChar;

            } else {
                newWord = newWord + currentWord[0];
            }
        }
        newWord = newWord + " ";
    }
    return newWord;
}
ourString = prompt("Enter string to initial cap:", "i am batman");
returnedString = initialCaps(ourString);
console.log(returnedString);






































// Using .indexOf()
//  Find if the substring "Adam" appears in the string and where
var myIndexOf = "Madam, I'm Adam.";

// Using .lastIndexOf()
//  Find if the substring "time" appears in the string and where
var myLastIndexOf = "There is a time and a place for everything, and this is neither the time nor the place";

// Using substr()
//  Output the substring "Data" from the string
var mysubStr = "This class is called Scalable Data Infrastructures";

// Using substring()
//  Output the substring between two index numbers in the string
var mySubString = "Life, the Universe, and Everything!";

// Using charAt()
//  Find the character at index position 6
//var myEmail = "llewis@fullsail.com";
//
//// Using .split()
////  Split a string into an array and output each item individually
//var mySplit = "Now is the time for all good men to come to the aid of the party.";
//
//function wheresAdam( whereIsIt) {
//    var where = whereIsIt.lastIndexOf("dam");
//    var where2 = whereIsIt.indexOf("dam");
//    return [where, where2];
//}
//
//    function subStrFunction(hitchArg)  {
//        var theT = hitchArg.indexOf("t");
//        var theComma = hitchArg.indexOf(",", theT);
//        var theUniverse = hitchArg.substring(theT,theComma);
//        return theUniverse;
//
//}
//function substrFunction(hitchArg) {
//    var everything = hitchArg.substr(24, 5);
//    return everything
//
//}
//function charAtFunction(emailArg) {
//    var atSymbol = emailArg.charAt(6);
//    return atSymbol
//
//}
//function splitString(stringToSplit) {
//    var splitArray = stringToSplit.split(" ", 4);
//    return splitArray
//}
//function changeCase(caseString) {
//    var newstring = caseString.toUpperCase();
//    return newstring
//
//}
//
//
// //console.log (" The last and first index are  " + wheresAdam(myIndexOf));
////console.log(" We've returned \"" + substrFunction(mySubString) + "\"");
////console.log(" The character at index 6 is " + charAtFunction(myEmail));
////var returnedArray = splitString(mySplit);
////console.log(returnedArray);
////for (var each in returnedArray) {
////    console.log(returnedArray[each]);
////console.log(changeCase(mySplit));