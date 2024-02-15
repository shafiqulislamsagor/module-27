function handleKeyboard(event){
    const playerPress = event.key;

    const currentPress = document.getElementById('current');
    const currentAlphabet = currentPress.innerText.toLowerCase();

    if(playerPress === currentAlphabet){
        removeBackgroundcolorById(playerPress)
        continueGame();
    }else{
        console.log('loser')
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