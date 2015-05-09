/*Lara Creamer
SDI 1505
 */
// Lara Creamer April, 9 2015 Deliverable 1

var myName= "Lara";
var nickname = "";
var vacationDestination =  "Bahamas";
var newVacation = "";
var days = true;
var daysTraveling =0;
var totalVacation =7;

console.log("my name is" + myName);
console.log("I am going on vacation to the "+ vacationDestination);
console.log("The number of days that I will be on my vacation is 3" + days);


//prompt for user input
    newVacation = prompt("Where are you going on vacation?");
    if (newVacation === vacationDestination) {
        days = confirm("It says your vacation is planned for 5 days. Is this true? Click OK for Yes, Cancel for No.");
        if (days === true) {
            console.log("You will be staying with us for 5 days and 4 nights.")

        } else {
            console.log ("We seem to have a problem accessing your vacation plans, please call our customer service.");

        }

    } else {
        daysTraveling = parseInt(prompt("Enter the number of days you will spend traveling."));
        if (daysTraveling === 2) {
            console.log("Your vacation is"+ (daysTraveling + totalVacation)+ "days long"+".");

        }else{
            console.log ("Your vacation will be more than one week long.");
        }
    }