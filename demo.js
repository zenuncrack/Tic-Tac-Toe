let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn'); 
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText == "") {
            console.log("box was clicked");
            if (turnO == true) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }
}

const disablebox = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
}

const enablebox = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the Winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide")
    disablebox();
}

const resetGame = () => {
    turnO = true;
    enablebox();
    msgContainer.classList.add('hide')
    resetBtn.classList.remove("hide");
    resetBtn.classList.add("reset-btn")
    
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
