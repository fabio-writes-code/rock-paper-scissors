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
let playerCount=0;
let computerCount=0;
function gameRound(playerSelection){
    console.log(playerCount, computerCount);
    let roundResult=playRound(playerSelection,getComputerChoice());
    if (roundResult==='player'){
        playerCount+=1;
    }else if (roundResult==='computer'){
        computerCount+=1;
    }
    document.querySelector('.playerCount').textContent=playerCount;
    document.querySelector('.computerCount').textContent=computerCount;
    
    if (playerCount===2) winner('player');
    if (computerCount===2) winner('computer');
}

function reset(){
    document.querySelector('.result').textContent='';
    document.querySelector('.playerCount').textContent=0;
    document.querySelector('.computerCount').textContent=0;
    playerCount=0;
    computerCount=0;

}
function winner(whoWon){
    const modal=document.querySelector('.modal');
    // modal.style['visibility']='visible';
    //Populating the Modal
    whoWon==='player'?document.querySelector('.who-won').textContent='Congratulations! You Won!':document.querySelector('.who-won').textContent='I win!!';
    modal.showModal();
    let again='' 

    document.querySelectorAll('#close-btn').forEach(btn=>btn.addEventListener('click',()=>{
        btn.getAttribute('class')==='yes'?reset():null;
        modal.close();
        // modal.style['visibility']='hidden';
    }));

    let finalString='';
    whoWon==='player'?finalString='Congratulations, you win!!':finalString='I win!!';

    
}


