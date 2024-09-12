let availableLetters = [];
let usedLetters = [];

function newParty() {
    availableLetters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    usedLetters = [];
    document.querySelector('.letter-display').innerText = 'Press Start';
}

function pressMainButton() {
    if (availableLetters.length === 0) {
        document.querySelector('.letter-display').innerText = 'All Letters Used!';
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableLetters.length);
    const letter = availableLetters.splice(randomIndex, 1)[0];
    usedLetters.push(letter);

    document.querySelector('.letter-display').innerText = letter;
}

// Initialize the first party on page load
newParty();
