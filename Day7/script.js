/**
 Lara Creamer
 SDI 1505
 May 19, 2015
 */

//global variable
var numberArray =[1,2,3,4,5,6,7,8,9,10,11,12];
var returnedArray = [];
var userPrompt;


userPrompt = prompt("Enter 'odd' to return odd numbers, or 'even' to return even numbers.");

while (userPrompt != "odd" && userPrompt != "even") {

    userPrompt = prompt ("Hey stupid! Enter 'odd' or 'even'");

}


//function
function evenArray(argArray, oddOrEven) {


    //local variables
    var newArray= [];
    var modNum;
    var zeroOrOne;



    if(oddOrEven === "odd") {
       zeroOrOne = 1;

    } else {
        zeroOrOne = 0;

    }

    for(i=0; i<argArray.length;i++) {
        modNum = argArray[i] % 2;
        if(numberArray === zeroOrOne) {
            newArray.push(numberArray[i]);

        }


    }

    return newArray;

}
//main code
returnedArray = evenArray(numberArray, userPrompt);

console.log(" The " + userPrompt +  " numbers array is " + returnedArray);
console.log("numberArray:" + numberArray );


