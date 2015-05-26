function lottery (powerball,flLot){
    var lot = prompt("Choose either powerball or the Florida Lottery.");
    var returnedLot;
    if (lot = "powerball") {
        returnedLot= Math.round(Math.random(5) * (59 - 1) + 1);
    }
    if(lot = "flLot"){
        returnedLot= Math.round(Math.random(6)*(53-1) + 1);


}
return returnedLot
}
//main code
returnedLot=lottery();
console.log("Your random numbers for this lottery are" + returnedLot);