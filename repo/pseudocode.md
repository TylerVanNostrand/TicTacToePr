## What we want to accomplish
Play tic tac toe with a computer component (stretch goal, play with 2 human players)

Objects: -Grid (3x3 board, traditional board.) .Game pieces (X's or O's) .computer based that is one of the game pieces. .stretch

-Popup msg that tells user who won the game

-Restart Button .Only be visible when game has ended .brings up a new board

INIT: -The board -pulls in the functions used in the JS to generate the gameboard.

let body = document.getElementById('body') body.className = 'container';

Function Gameboard()

When the grid is pulled up, make each tile within6, row and col clickable

let buttonRow = buildElement('div', 'row', '', '');
let buttonCol = buildElement('div', 'col-6 text-center mx);
buttonRow.appendChild(buttonRow);
buttonCol.appendChild(buttonCol);

Function Restart() Display a button to restart the game; function restartGame(){ state = 0; body.innerHTML = ''; buildGame(); gameOver = False; }

function buildGame() let mainRow = buildElement ('div",) let mainCol = buildElement ('div')

## Events:
 -Click listener that can tell which row or column has been selected for mouse click. -Text that states whos won, or who's turn it is.

---

Pseudocode with Ian.

## MVC

What goes in the view:
Container .row -header .row
-Both players, -show their wins and losses (stretch goal) -show whose turn it is -who won / tie (ending win condition first placement) -a key to the players like a map that shows who's turn it is (stretch goal) .row
-the game grid -1 row -9 cols - size 4 div class = row div class = col-4 tile 1st col, 1st row div class = col-4 tile 2nd col, 2nd row div class = col-4 tile 3rd col, 3rd row

        or
        -3 rows
            -3 cols -size 4 each row
-Tile
    -X's or O's or Blank
.row
-restart button model (Show the winner or the tie) (ending win condition second placement)

What goes in the model:
Who's turn it is: -"X" || "O" as a string Count (0, 1, 2... -> n) dual purpose: keep track of game moves boolean: true / false x === true, but o is false

We need to keep track of who won number (based on the sum of all the rows, cols, diags) // use a controller method that would set the state // every time you click, you can save the number, or auto increment ++

store turns in array
    (0 for no click, 1 for x, -1 for o)
    (0 for no click, 1 for x, 2 for o)
    ("" for no click, "X" for x, "O" for o)
What the array looks like:
[[], [], []] idea - 1
[], [], [] idea 2 (stores 3 each)
[0, 1, 2, 3, 4, 5, 6, 7, 8] - idea 3 (stores 9)


optional: create a tile class to keep track of all tiles
tile ("" for no click, "X" for x, "O" for o)
{
    "" || "X" || "o"
    clicked?
    "who clicked" - can be abstracted
    where it is? - can be abstracted
    bgColor: "" || "X" || "o" - can be abstracted
}

// too verbose, but it is an option (for chess)
{ turn1: { tileType:"knight", player:"X" location: [0,2] }, turn2:"0" }

Tiles could have states boolean: true / false to dictate the tile clickability Tile clickability // controller method on the finish of the game, lock the tiles on any in game click, lock specific tile

Parent / Child relationships

parent can have many children children can have only one parent children can have many siblings

board: (class) { is game complete? how many tiles do I have? - can be abstracted from length of array all tiles: array current state of all my tiles? - can be abstracted }

What goes in the controller:
-initialize //pseudocode this //about the length of a kata

-helper function for dynamic rendering //generateElement -render method -select x or 0 (stretch goal)

-tile click event listener // (moves>5) ? condition or method? -win condition // check to see if there is a winner or tie? -set tile clickability -switch current player

-win condition did we have a winner? -set tile clickability for all tiles -display the final game state -restart click event listener

-restart button forfeit / auto win (stretch goal) -lose button (stretch goal) -game history

# Win scenarios

    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]