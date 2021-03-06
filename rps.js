




function game(){   
    
    const buttons = document.querySelectorAll('button');
    const selection = document.querySelector('.selection');
    const result = document.querySelector('.result');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let computerSelection = computerPlay();
            let playerSelection = button.innerText;
            selection.innerText = "Your selection: " + playerSelection 
            result.innerText = "" + String(playRound(playerSelection, computerSelection));

        })
    })
    
    

}





function computerPlay(){
    let options = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3);
    return options[index]
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            return "You win! rock beats scissors!"
        }else if (computerSelection == "paper"){
            return "You lose! paper beats rock!"
        }else{
            return "It's a tie!"
        }
    }else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            return "You lose! scissors beats paper!"
        }else if (computerSelection == "paper"){
            return "It's a tie!"
        }else{
            return "You win! paper beats rock!"
        }
    }else{
        if (computerSelection == "rock"){
            return "You lose! rock beats scissors!"
        }else if (computerSelection == "scissors"){
            return "It's a tie!"
        }else{
            return "You win! scissors beats paper!"
        }
    }
}


