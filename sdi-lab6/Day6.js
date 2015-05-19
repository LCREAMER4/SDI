/* Lara Creamer
SDI 1505
May 16, 2015
Working With Arrays
 */

function myFunction() {
    var petArray = ["Max", "Ollie", "Scruffy", "Streak", "Bambi", "Nugget", "Melody", "Vixie"];
    var typePetArray = ["dog", "dog", "cat", "hamster", "rabbit", "cat", "cat", "cat"];

    for (var i = 0; i < petArray.length; i++) {
        console.log(petArray[i] + " is my " + typePetArray[i] + ".");


    }
    petArray.push("Gus");
    typePetArray.push("dog");
    console.log(petArray[i] + " is my " + typePetArray[i] + ".");
}
 myFunction();

