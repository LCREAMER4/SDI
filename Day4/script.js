/*
Lara Creamer
SDI 1505
Day 4 Coding
 */

//var firstName= "Lara",
//    lastName= "Creamer",
//    yourFirstName,
//    yourLastName;
//
//// prompts
////ask user for first name
////ask user for last name
//
//yourFirstName = prompt("enter a name:", "type your name here");
//yourLastName = prompt("enter your last name", "Type your last name here");
//
//if(yourFirstName === firstName || yourLastName === lastName) {
//
//   console.log("You are correct!");
//} else {
//    console.log("Intruder Alert!");
//}
//var myName= "John Doe";
//var myNumber= 100;
////while loop
//while (myNumber < 15) {
//    console.log("My number is" + myNumber );
//    //myNumber = myNumber +1;
//    //myNumber ++; ++= plus 1, --= minus 1
//    //myNumber +=1;
//    myNumber++;
//}
//console.log("The loop is done");
//
////for loop example
//for (var i = 0; i <= 10; i++) {
//    console.log("i is equal to " + i);
//}
//99 Bottles of pop on the wall

for (var pop = 99 ; pop >= 1 ; pop -- ) {
    if (pop === 1) {
        console.log(pop + " bottle of pop on the wall");
        console.log(pop + " bottle of pop");
    } else {
        console.log(pop + " bottles of pop on the wall");
        console.log(pop + " bottles of pop");
    }
    console.log("Take one down, pass it around,");
    if (pop > 2) {
        // As long as pop is greater than 2, we need the plural of bottles.
        console.log((pop - 1) + " bottles of pop on the wall.");
    } else if (pop == 1){
    //when pop equals 1, we indicate no more bottles left.
        console.log(" no more bottles of pop on the wall.");
    } else {
    // When pop equals 2, we need the singular bottle.
        console.log((pop - 1) + " bottle of pop on the wall.");
    }

    console.log(" ");

}





