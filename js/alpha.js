function handleKeyboard(event){
    const playerPress = event.key;

    const currentPress = document.getElementById('current');
    const currentAlphabet = currentPress.innerText.toLowerCase();

    if(playerPress === currentAlphabet){
        // let currentScore = document.getElementById('currentScore').innerText;
        
        // const currentScoreNumber = parseInt(currentScore);
        // const newScore = currentScoreNumber + 1;

        // currentScore = newScore;
        // ------------------------------------------

        const score = ScoreNumber('currentScore');
        const newScore = score + 1 ;
        updatedScore('currentScore',newScore)

        
        removeBackgroundcolorById(playerPress)
        continueGame();
    }else{
        // const currentLife = document.getElementById('current-life');
        // const curretLifeText = currentLife.innerText;
        // const currentLifeNumber = parseInt(curretLifeText);
        // const loseLife = currentLifeNumber - 1 ;
        // currentLife.innerText = loseLife;
        // ----------------------------------------
        const currentLife = ScoreNumber('current-life');
        const loseLife = currentLife - 1;
        updatedScore('current-life',loseLife)
        if(loseLife === 0){
            gameOver()
        }
    }
}

document.addEventListener('keyup' , handleKeyboard)

function continueGame(){
    const alphabet = getRandomAlphabet();
    
    const currentAlphabet = document.getElementById('current');
    currentAlphabet.innerText = alphabet;
    currentAlphabet.classList.add('uppercase')
    setBackgroundColorById(alphabet)
}

function play(){
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden');
    hideElement('home-screen')
    // const playgroundSection = document.getElementById('play-ground');
    // playgroundSection.classList.remove('hidden')
    showElement('play-ground');
    continueGame();
}

function gameOver(){
    hideElement('play-ground');
    showElement('scoreEnd')
}

function playAgain(){
    showElement('play-ground');
    hideElement('scoreEnd');
    updatedScore('current-life',5);
    updatedScore('currentScore',0)
}