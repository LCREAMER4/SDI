//  NAME:  Lara Creamer
//  DATE:  May 12, 2015
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var ticketPrice = 12;
var discountedTicket = 7;
var age = "";


age = parseInr(prompt("How old are you?"));
ticketPrompt= confirm("Will you be buying movie tickets today?  Click OK for true or Cancel for false.");
 discountTicket = confirm("Would you like to receive a discount on your tickets today?  Click OK for true or Cancel for false.");

if (age >= 55  || age < 10) {
    console.log("You get a ticket price of " + discountedTicket +" dollars.");
} else {
    console.log("You have a ticket price of " +ticketPrice + " dollars.");
 }


var frontLeftTire;
var frontRightTire;
var backLeftTire;
var backRightTire;

frontLeftTire = prompt("Please input the pressure of your front left tire.");
frontRightTire= prompt("Please input the pressure of your front right tire.");

if (frontLeftTire === frontRightTire) {
    console.log("Your front tires are good to go!");
} else {
    console.log("Your front tire pressures need to be equal. Check your tire pressure.");
}
backLeftTire= prompt("Please input the pressure of your back left tire.");
backRightTire= prompt("Please input the pressure of your back right tire.");

if (backLeftTire === backRightTire ) {
    console.log("Your back tires are good to go.");
} else{
    console.log("Your back tire pressures need to be equal. Check your tire pressure");
}
if(frontLeftTire === frontRightTire && backLeftTire === backRightTire) {
    console.log("Your tires are good to go! drive safe.")
} else{
    console.log(" Your tires are not good to go! Have your tire pressure checked.")
}

