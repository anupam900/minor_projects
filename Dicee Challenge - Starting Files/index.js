var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice"+ randomNumber1 + ".png";
var randomimagesource="images/"+ randomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimagesource);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage1= "dice"+ randomNumber2 + ".png";
var randomimagesource1="images/"+ randomDiceImage1;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimagesource1);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🏆player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins🏆";
}
else{
    document.querySelector("h1").innerHTML = "tie😒";
}