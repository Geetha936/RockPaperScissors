function getComputerChoice(){
    const choices = ['Rock' , 'paper' , 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerChoice){
    playerSelection=playerSelection.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    if(playerSelection == computerChoice){
        return 'tie both chose '+computerChoice;
    }
    else if(playerSelection == 'rock' && computerChoice =='paper'){
        return 'You Lose ! '+computerChoice+" beats "+playerSelection;
    }
    else if(playerSelection == 'paper' && computerChoice == 'scissors'){
        return  'You Lose ! '+computerChoice+" beats "+playerSelection;
    }else if (playerSelection == 'scissors' && computerChoice == 'rock'){
        return  'You Lose ! '+computerChoice+" beats "+playerSelection;
    }
    else{
        return  'You Won ! '+playerSelection+" beats "+computerChoice;
    }
}

function playGame(){
    const playerSelection = document.getElementById("playerSelection").value;
    const computerChoice = getComputerChoice();
    document.getElementById("span").innerHTML=(playRound(playerSelection,computerChoice));
}