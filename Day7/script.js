/**
 Lara Creamer
 SDI 1505
 May 19, 2015
 */

//global variable
var numberArray =[1,2,3,4,5,6,7,8,9,10,11,12];
var returnedArray = [];





//function
function evenArray(argArray) {


    //local variables
    var newArray= [];
    var modNum;
    for(i=0; i<argArray.length;i++) {
        modNum = argArray[i] % 2;
        if(modNum === 1) {
            newArray.push(argArray[i]);

        }


    }

    return newArray;

}
//main code
returnedArray = evenArray(numberArray);

console.log(" The new numbers array is " + returnedArray);


