function getComputerChoice(){
    const choices = ['Rock' , 'paper' , 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const buttons = document.querySelectorAll('img');
buttons.forEach(button => {
    console.log(button.id);
    button.addEventListener('click',() =>{ playGame(button.id)});
});

function playRound(playerSelection, computerChoice ,playerScore,computerScore){
    playerSelection=playerSelection.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    if(playerSelection == computerChoice){
        return 'tie both chose '+computerChoice;
    }
    else if(playerSelection == 'rock' && computerChoice =='paper'){
        
        computerScore.innerHTML= parseInt(computerScore.innerHTML) +1;
        return 'You Lose ! '+computerChoice+" beats "+playerSelection;
    }
    else if(playerSelection == 'paper' && computerChoice == 'scissors'){
        computerScore.innerHTML= parseInt(computerScore.innerHTML) +1;
        return  'You Lose ! '+computerChoice+" beats "+playerSelection;
    }else if (playerSelection == 'scissors' && computerChoice == 'rock'){
        computerScore.innerHTML= parseInt(computerScore.innerHTML) +1;
        return  'You Lose ! '+computerChoice+" beats "+playerSelection;
    }
    else{
        playerScore.innerHTML=parseInt( playerScore.innerHTML) +1;
        return  'You Won ! '+playerSelection+" beats "+computerChoice;
    }
}

function playGame(choice){
    const playerSelection = choice;
    const computerChoice = getComputerChoice();
    const playerScore = document.getElementById("player-won");
    const computerScore = document.getElementById("player-lost");
    document.getElementById("span").innerHTML=(playRound(playerSelection,computerChoice,playerScore,computerScore));
}
