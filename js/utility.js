function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}


function getRandomAlphabet(){
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = alphaString.split('');

    const randomNumber = Math.random()*26;
    const index = Math.round(randomNumber)


    const alphabet = alpha[index];
    return alphabet;
}