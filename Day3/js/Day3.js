/*
Lara Creamer
SDI 1505

 */
// initial variable

var myName="Lara";
var newName= "";
var lastName= "";

//prompt for user input
newName = prompt("Please enter your first name");

//Create our first conditional
if(newName === myName) {

    lastName = prompt("Please enter your last name");
    if (lastName === "Creamer") {
    //If first name is correct and last name is correct
        console.log(" Greetings," + myName +" "+ lastName)
    } else {
        //If first name is correct and last name is incorrect
        console.log("Sorry you're from the wrong family!");
    }
} else {
    //If the first name is wrong
        console.log("Intruder Alert!");
    }

//new variables for data type tests
var myNumber = 0;
var secondNumber = 3.14159265;

myNumber = parseFloat(prompt("Enter the number 3.14159265."));
if (myNumber === secondNumber) {
    console.log("They match exactly! The number was " + myNumber);
}else {
console.log("The number you entered was " + myNumber);

}







