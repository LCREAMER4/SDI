/* Lara Creamer
SDI 1505
May 14, 2015
 */

 var firstNumber = parseFloat(prompt("Input first number."));
var secondNumber = parseFloat(prompt("Input second number."));
var final;

//prompt for operation
var opPrompt = prompt("What operation would you like to use? enter \ + \ , \ - \ , \ * \ , or \ / \ " );
function addition (num1, num2) {
    var add = num1 + num2;
    return (add);
}

function subtraction (num1,num2) {
    var subtract = num1 - num2;
    return (subtract);
}

function multiplication (num1, num2) {
    var multiply = num1 * num2;
    return (multiply);
}


function division(num1, num2) {
    var divide = num1 / num2;
    return (divide);

}
//Main Code

if(opPrompt === "+"){
    final = addition(firstNumber, secondNumber)
} else if (opPrompt === "-"){
    final = subtraction(firstNumber, secondNumber)
} else if (opPrompt === "*") {
    final = multiplication(firstNumber, secondNumber)
} else if (opPrompt ==="/") {
    final = division(firstNumber, secondNumber);
    if (opPrompt === division && secondNumber === 0){
        final=console.log("This function is undefined because it cannot be divided by 0.")
    }


}

console.log(firstNumber + opPrompt + secondNumber + " = " + final);
