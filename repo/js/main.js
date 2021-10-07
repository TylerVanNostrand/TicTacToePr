// setting up to us JS for my HTML component of the game
let body = document.getElementById('body');
body.className = 'container';
// create a function to create all my elements for the html
function buildElement(elementType, classes, id, htmlContent) {
    let element = document.createElement(elementType);
    element.className = classes;
    element.id = id;
    element.innerHTML = htmlContent;
    return element;
}
// function that start ot build the game board
function buildGame() {
    state = 0;
// declaring my html elements to be called using bootstrap to stylize them
    let title = buildElement('h1', 'text-center my-4 text-light', 'title', 'Tic-Tac-Toe');
    let turn = buildElement('h6', 'text-center mt-3', 'turn', "Player X's Turn");
    title.appendChild(turn);
    body.appendChild(title);
// creating my gameboard
    let gameBoard = buildElement('div', 'container', 'board', '');
    let tiles = 0;

// creating my equation to make rows. be 3x3 and calling for the rows and columns to be generated
    for (let i = 0; i < 3; i++) {
        let mainRow = buildElement('div', 'row border-top border-bottom border-dark mx-auto shadow', 'gamerow', '');
        for (let j = 0; j < 3; j++) {
            let mainCol = buildElement('div', 'col-4 bg-info text-center border-start border-dark display-3 border-end pt-4', tiles, '');
            tiles++;
            // event listener for the click within the gameboard to start the playGame function
            mainCol.addEventListener('click', playGame);
            mainRow.appendChild(mainCol);
        }
        gameBoard.appendChild(mainRow);
    }

    let buttonRow = buildElement('div', 'row', '', '');
    let buttonCol = buildElement('div', 'col-6 text-center mx-auto', '', '');
    let resetButton = buildElement('button', 'btn btn-outline-light my-5 mx-auto', 'reset', 'Reset Game');
    resetButton.addEventListener('click', restartGame);
    buttonCol.appendChild(resetButton);
    buttonRow.appendChild(buttonCol);
    gameBoard.appendChild(buttonRow);
    body.appendChild(gameBoard);
}
// declaring combos for wins for the playGame function. Will pull horizontal, vertical, and diagonal winning postions
let winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// function starts the game when it hears the event listener for the build game fucntion
function playGame() {
    let turnText = document.getElementById('turn');
    if (this.innerText == '' && gameOver == false) {
        if (state % 2 == 0) {
            this.innerText = 'X';
            turnText.innerHTML = "Player O's Turn";
        } else {
            this.innerText = 'O';
            turnText.innerHTML = "Player X's Turn";
        }
        state++;
    }
// uses one of the above values from winCombo to declare a winner
    for (let i = 0; i < winCombo.length; i++) {
        let pos1 = document.getElementById(winCombo[i][0]);
        let pos2 = document.getElementById(winCombo[i][1]);
        let pos3 = document.getElementById(winCombo[i][2]);
        console.log(pos1, pos2, pos3, this);
// listens for one of the games players to hit one of the game winCombos and declare a winner
        if (pos1.innerText === pos2.innerText && pos2.innerText === pos3.innerText && pos1.innerText === 'X') {
            turnText.innerHTML = 'Game Over - Player X wins';
            gameOver = true;
        }
        if (pos1.innerText === pos2.innerText && pos2.innerText === pos3.innerText && pos1.innerText === 'O') {
            turnText.innerHTML = 'Game Over - Player O wins';
            gameOver = true;
        }
    }
    // determines if there is a tie
    if (state >= 9 && gameOver == false) {
        turnText.innerHTML = 'The game is a tie!';
    }
}

// funciton to generate the restart button
function restartGame() {
    state = 0;
    body.innerHTML = '';
    buildGame();
    gameOver = false;
}

let gameOver = false;
let state = 0;

buildGame();