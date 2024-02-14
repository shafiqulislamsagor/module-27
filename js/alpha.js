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