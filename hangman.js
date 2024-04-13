
let intro=document.querySelector('.page1')
let game=document.querySelector('.page2')
let button = document.querySelector('.alphabet button');
let words = ['bear', 'monkey', 'fox', 'rabbit', 'cow', 'giraffe','elephant','dog','cat'];
let randomWord = Math.floor(Math.random() * words.length);
let newWord = words[randomWord]
console.log(newWord);



function playGame() {
    intro.style.display = "none";
    game.style.display = "block";
  }
function checkLetter(letter) {
    let underletterElement = document.querySelector('.underletter');
    underletterElement.textContent += letter.toUpperCase();
}

function displayUnderlines() {
    let underletterElement = document.querySelector('.underletter');
    underletterElement.textContent = ' ';
    for (let i = 0; i < newWord.length; i++) {
        underletterElement.textContent += '_';
    }
}



function checkWord() {
    let underletterElement = document.querySelector('.underletter');
    let underletterText = underletterElement.textContent.trim().toLowerCase();
    if (underletterText === newWord) {
        alert('Doğru bildiniz');
       
    } else {
        alert('Cevabınız yanlışdir');
    }
}


function resetGame() {
    let underletterElement = document.querySelector('.underletter');
    underletterElement.textContent = '';
    newWord = words[randomWord];
    console.log(newWord);
    displayUnderlines();
}

