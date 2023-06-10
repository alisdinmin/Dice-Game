//generating a random number to get a ramdom dice phase
var rando1 =Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "dice" + rando1 + ".png"; //dice1.png to dice2.png
 
//change the source attribute of elements
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImage1);

//for 2nd dice
var rando2 = Math.floor(Math.random()*6)+1;
var randoDiceImage2 = "dice" + rando2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randoDiceImage2); //combination of line 7 & 8

//changing the title according to the winner
if (rando1>rando2){
    document.querySelector("h1").innerHTML="Player 1 hurahh🦋"
}
else if (rando1<rando2) {
    document.querySelector("h1").innerHTML="Player 2 hurahh🦋"
} 
else {
    document.querySelector("h1").innerHTML="DRAWWWW"
}

