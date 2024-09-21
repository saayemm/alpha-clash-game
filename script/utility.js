function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBgById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBgById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getTextElementValueById(elementId){
    const element  = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getArandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    console.log(index);

    const alphabet = alphabets[index];
    return alphabet;
}