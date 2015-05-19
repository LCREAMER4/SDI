/**
 * Created by laracreamer on 5/19/15.
 */


//Lab 6 Review

//function
function authorFunction(){

    //for local arrays
    var authors = ["Charles Dickens", "William Shakespeare", "Mark Twain", "Hunter S. Thompson"];
    var titles = ["Oliver Twist", "Hamlet", "Tom Sawyer", "Fear and Loathing in Las Vegas"];

    //for loop to go through the array items
for (var i = 0; i < authors.length; i++) {
    console.log(authors[i] + " wrote " + titles[i] +"." );
}

    //use an array method to alter the arrays
authors.push("Dorathy Allison");
    titles.push("Bastard Out of Carolina");

    //do a final output for the change
console.log("I added " + authors[i] + " who wrote " + titles[i] +".")
}

authorFunction();