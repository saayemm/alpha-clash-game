// function play(){
//     const HomeSection = document.getElementById('home-screen');
//     HomeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function hundleKeyboardKeyUp(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    if(playerPressed==="Escape"){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    if(playerPressed===expectedAlphabet){
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // score update
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;

        
        // strat a new round
        removeBgById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife-1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife===0){
            gameOver();
        }

        // const currentLifeElement = document.getElementById('current-life');
        // const currenLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currenLifeText);

        // const newLife = currentLife-1;

        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', hundleKeyboardKeyUp);

function continueGame(){
    const alphabet = getArandomAlphabet();
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    setBgById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBgById(currentAlphabet);
}