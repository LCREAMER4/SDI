/*  Lara Creamer
SDI 1505
May 21, 2015
 */

















var array1 =[10, 6, 7, 3, 12, 5];
var array2 = [25, 100, 4, 22, 16, 105, 2, 7];
var array3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];
var numArrays= [array1, array2, array3];
var returnedArray;

function bubbleSort(argArray) {
//variables
    var num1,
        num2,
        holder;
//loop through the array
    for (var newElement in argArray) {
        for (var element in argArray) {

            element = parseInt(element);

//assign array elements to variables
            num1 = argArray[element];
            num2 = argArray[element + 1];
            //compare to see which is greater
            if (num1 > num2) {
                holder = num1;
                argArray[element] = num2;
                argArray[element + 1] = num1;

            }


        }

    }

    return argArray


}


for(var each in numArrays) {
    returnedArray = bubbleSort(numArrays[each]);
    console.log("Array number" + each + "sorted is" + returnedArray);

}


