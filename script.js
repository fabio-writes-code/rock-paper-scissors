function getComputerChoice(){
    const min=0;
    const max=3;
    const options=['rock','paper','scissors'];
    let choice= Math.floor(Math.random()*(max-min))+min;
    return options[choice];
}

function getPlayerSelection(){
    return prompt('rock, paper or scissors?').toLowerCase();
}

function playRound(playerSelection,computerSelection){
    let winner;
    let winnerChoice=['player','computer','tie'];
    if(playerSelection==computerSelection){     
        winner=3;
    }else{
        switch(computerSelection){
            case 'rock':
                playerSelection==='paper'? winner=1:winner=2;
                break;
            case 'paper':
                playerSelection==='scissors'? winner=1:winner=2;
                break;
            case 'scissors':
                playerSelection==='rock'? winner=1:winner=2;
                break;          
        }
    }
    switch(winner){
        case 1:
            console.log(`Congratulations, your ${playerSelection} beats my ${computerSelection}`)
            break;
        case 2:
            console.log(`I win!! my ${computerSelection} beats your ${playerSelection}`)
            break;
        case 3:
            console.log(`It's a tie! We both played ${playerSelection}`);
            break;
    } 
    return winnerChoice[winner-1];
}

function gameRound(){
    alert("Let's play some rock, paper. scissors. First one to win 3 rounds, WINS!")
    let playerCount=0;
    let computerCount=0;
    do {
        console.log(playerCount, computerCount);
        let roundResult=playRound(getPlayerSelection(),getComputerChoice());
        if (roundResult==='player'){
            playerCount+=1;
        }else if (roundResult==='computer'){
            computerCount+=1;
        }
    } while (playerCount<=2 && computerCount<=2);
    playerCount>computerCount? alert(`You win! You won 3 rounds, I won ${computerCount} rounds`):alert(`I win! I won 3 rounds, you won ${playerCount} rounds`);
}

gameRound()
