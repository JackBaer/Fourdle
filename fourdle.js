var height = 7; //number of guesses
var width = 4; //length of word

//X and Y indecies for tile grid
var row = 0; //current guess
var column = 0; //current letter

var gameOver = false;
var word = "SPIN";

function update() {
    let correct = 0;
    for(let i = 0; i < width; i++) {
        //Construct index
        let currentTile = document.getElementById(row.toString() + "-" + i.toString());
        let letter = currentTile.innerText;

        //Is it in the correct position?
        if(word[i] == letter) {
            currentTile.classList.add("correct");
            correct++;
        }
        //Is it in the word?
        else if(word.includes(letter)) {
            currentTile.classList.add("present");
        }
        //Not in word
        else {
            currentTile.classList.add("absent");
        }

        //All tiles are correct
        if(correct == width) {
            gameOver = true;
        }
    }
}

function initialize() {
    //Create tile grid
    for (let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            // Construct tile classes in HTML document and populate them in board div. based on height and width variables
            // Done by creating tags as follows: <span id="0-0" class="tile"> </span>
            let tile = document.createElement("span");
            tile.id = i.toString() + "-" + j.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            //Add finished tag to fourdle.html
            document.getElementById("board").appendChild(tile);
        }
    }

    //Listen for key presses
    document.addEventListener("keyup", (e) => {
        if(gameOver) {
            return;
        }
        //If a letter key is pressed, get the current tile's index and populate it with the pressed key, then move on to next tile
        if("KeyA" <= e.code && e.code <= "KeyZ") {
            if(column < width) {
                //Construct index
                let currentTile = document.getElementById(row.toString() + "-" + column.toString());
                if(currentTile.innerText == "") {
                    //Letter component of code 'KeyA'
                    currentTile.innerText = e.code[3];
                    column++;
                }
            }
        }
        //If the backspace key is pressed, get the current tile's index and populate it with an empty string, then move on to previous tile
        else if(e.code == "Backspace") { 
            if(0 < column && column <= width) {
                column--;
            }
            //Construct index
            let currentTile = document.getElementById(row.toString() + "-" + column.toString());
            currentTile.innerText = "";
        }

        else if(e.code == "Enter") {
            update();
            row++; //start new row
            column = 0; //start at beginning of line
        }

        if(!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }
    });
}

//When the webpage renders, call the initialize function
window.onload = function() {
    initialize();
}

