let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const ans = Math.floor(Math.random() * 3);
    return options[ans];
};
const drawGame = ()=>{
console.log("game is draw");
msg.innerText = "Its a Draw!";
};
const showWinner = (userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText = "You win!";
    }
    else{
        console.log("you lose");
        msg.innerText = "You Lose!";
    }
}
const playGame = (userChoice)=>{
   
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice=== rock){
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice===paper){
            userWin = compChoice==="scissor" ? false : true;
        }
        else {
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
});
});