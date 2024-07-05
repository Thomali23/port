let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    ties: 0,
    losses: 0
};

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Paper') {
            result = 'You Lose.' ;
        } else if (computerMove === 'Rock') {
            result = 'It is a draw.'
        } else if (computerMove === 'Scissors') {
            result = 'You Win.'
        }
    }
    
    else if (playerMove === 'Paper') {
        if (computerMove === 'Scissors') {
            result = 'You Lose.' ;
        } else if (computerMove === 'Paper') {
            result = 'It is a draw.'
        } else if (computerMove === 'Rock') {
            result = 'You Win.'
        }
    }

    else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose.' ;
        } else if (computerMove === 'Scissors') {
            result = 'It is a draw.'
        } else if (computerMove === 'Paper') {
            result = 'You Win.'
        }
    }

    if (result === 'You Win.') {
        score.wins ++;
    } else if (result === 'You Lose.') {
        score.losses ++;
    } else if (result === 'It is a draw.') {
        score.ties ++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `Your Choice: <img src="img/${playerMove}-emoji.png" class="move-icon">  -  Computer Choice: <img src="img/${computerMove}-emoji.png" class="move-icon">`
    
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 ;

    let computerMove = '';

    if (randomNumber === 1) {
        computerMove = 'Rock';
    }
     else if (randomNumber === 2) {
        computerMove = 'Paper'; 
    }
    else if (randomNumber === 3 ) {
        computerMove = 'Scissors';
    }

    return computerMove
}
