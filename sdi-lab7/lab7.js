/*
Lara Creamer
SDI 1505
May 19, 2015
 */

//global variables
var array1 =[10, 6, 7, 3, 12, 5];
var array2 = [25, 100, 4, 22, 16, 105, 2, 7];
var array3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];
var returnedArray= [];

//function
function bubbleSort(argArray) {
    var numHold;

    for (var i = 0; i < argArray.length; i++) {
        for (var x = 0; x < argArray.length; x++) {
            if (argArray[x] > argArray[x+1]) {
               numHold = argArray[x];
                argArray[x] = argArray[x+1];
                argArray[x+1] = numHold;
            }

        }

    }
    return argArray
}
//main code
returnedArray = bubbleSort(array1);
console.log("The new array is " + returnedArray);

for (var z = 0; z < 3; z++) {
 if (z === 0) {
    console.log("The new array is " + bubbleSort(array1));
 } else if (z === 1){
    console.log("The new array is " + bubbleSort(array2));
 }else{
    console.log("The new array is " + bubbleSort(array3));
 }


}