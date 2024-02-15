function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBackgroundcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}


function getRandomAlphabet(){
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = alphaString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber)


    const alphabet = alpha[index];
    return alphabet;
}