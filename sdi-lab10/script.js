/*Lara Creamer
SDI 1505
Lab 10
Problem Solving
 */



var newArray=[];

var lot = prompt("Choose either powerball or the Florida Lottery(flLot).");
function lottery (argLottery) {
    var lot;
    var poppedItem;
    var returnedLot = [];
    if (argLottery === "powerball") {
        for (var i = 0; i < 5; i++)
            returnedLot.push(Math.round(Math.random() * (59 - 1) + 1));
    }
    returnedLot.push(Math.round(Math.random() * (35 - 1) + 1));

  