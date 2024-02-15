function handleKeyboard(event){
    const playerPress = event.key;

    const currentPress = document.getElementById('current');
    const currentAlphabet = currentPress.innerText.toLowerCase();

    if(playerPress === currentAlphabet){
        const currentScore = document.getElementById('currentScore');
        const current = currentScore.innerText;
        const currentScoreNumber = parseInt(current);
        const newScore = currentScoreNumber + 1;

        currentScore.innerText = newScore;

        
        removeBackgroundcolorById(playerPress)
        continueGame();
    }else{
        const currentLife = document.getElementById('current-life');
        const curretLifeText = currentLife.innerText;
        const currentLifeNumber = parseInt(curretLifeText);
        const loseLife = currentLifeNumber - 1 ;
        currentLife.innerText = loseLife;
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