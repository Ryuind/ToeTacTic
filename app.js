let form = document.querySelector("#myForm");
function handleForm(e) {e.preventDefault();}
form.addEventListener('submit', handleForm);


const user = ({ player, name, turn}) => ({player, name, turn});

document.querySelector(".playerInputButton").addEventListener('click', () => { playerOne.name = document.querySelector(".playerOneUserInput").value})
document.querySelector(".playerInputButton").addEventListener('click', () => { playerTwo.name = document.querySelector(".playerTwoUserInput").value})

let playerOne = user({player: "player one", name: "Player One", turn: "O"});
let playerTwo = user({player: "player two", name: "Player Two", turn: "X"});

let tickyTacky = (function() {

    this.gameboard = ["","","","","","","","",""]
    
    this.changeMarker = false;

    this.colorChanger = "green";

    const startButton = () => {
        document.querySelector(".playerInputButton").addEventListener('click', startButtonFunction)
    }

    const startButtonFunction = () => {
        document.querySelector(".gameTitle").innerHTML = playerOne.name + "'s Turn"
        this.gameboard[0] = "";
        this.gameboard[1] = "";
        this.gameboard[2] = "";
        this.gameboard[3] = "";
        this.gameboard[4] = "";
        this.gameboard[5] = "";
        this.gameboard[6] = "";
        this.gameboard[7] = "";
        this.gameboard[8] = "";
    }
   
    let writeToDiv = (selector) => {
  
        if (this.changeMarker) {
            this.message = "O";
            this.changeMarker = false;
            document.querySelector(".gameTitle").innerHTML = playerOne.name + "'s Turn";   
            this.colorChanger = "purple"
        }
        else {
            this.message = "X";
            this.changeMarker = true;
            document.querySelector(".gameTitle").innerHTML = playerTwo.name + "'s Turn";   
            this.colorChanger = "green"
        }

        if (selector === "#topLeft") {
            this.gameboard[0] = this.message;
        }
        else if (selector === "#topMid"){
            this.gameboard[1] = this.message;
        }
        else if (selector === "#topRight"){
            this.gameboard[2] = this.message;
        }
        else if (selector === "#midLeft"){
            this.gameboard[3] = this.message;
        }
        else if (selector === "#midMid"){
            this.gameboard[4] = this.message;
        }
        else if (selector === "#midRight"){
            this.gameboard[5] = this.message;
        }
        else if (selector === "#botLeft"){
            this.gameboard[6] = this.message;
        }
        else if (selector === "#botMid"){
            this.gameboard[7] = this.message;
        }
        else if (selector === "#botRight"){
            this.gameboard[8] = this.message;
        }
        else {
            console.log(gameboard)
        }
        document.querySelector(selector).innerHTML = this.message;
        document.querySelector(selector).style.color = this.colorChanger;

        winCondtion()
    }

    let pressSquareOne = function() {
        document.querySelector("#topLeft").addEventListener('click', () => {
            if (document.querySelector("#topLeft").innerHTML === "") {
                writeToDiv("#topLeft")
            }
            else {
                console.log(gameboard)
            }
        })
    }

    const pressSquareTwo = () => {
        document.querySelector("#topMid").addEventListener('click', () => {
            if (document.querySelector("#topMid").innerHTML === "") {
            writeToDiv("#topMid")
        }
        else {
            console.log(gameboard)
        }
        })
    }

    const pressSquareThree = () => {
        document.querySelector("#topRight").addEventListener('click', () => {
            if (document.querySelector("#topRight").innerHTML === "") {
            writeToDiv("#topRight")
        }
        else {
            console.log(gameboard)
        }
        })
    }

    const pressSquareFour = () => {
        document.querySelector("#midLeft").addEventListener('click', () => {
            if (document.querySelector("#midLeft").innerHTML === "") {
            writeToDiv("#midLeft")
        }
        else {
            console.log(gameboard)
        }
        })
    }

    const pressSquareFive = () => {
        document.querySelector("#midMid").addEventListener('click', () => {
            if (document.querySelector("#midMid").innerHTML === "") {
            writeToDiv("#midMid")
        }
        else {
            console.log(gameboard)
        }
        })
    }

    const pressSquareSix = () => {
        document.querySelector("#midRight").addEventListener('click', () => {
            if (document.querySelector("#midRight").innerHTML === "") {
            writeToDiv("#midRight")
        }
        else {
            console.log(gameboard)
        }
        })
    }

    const pressSquareSeven = () => {
        document.querySelector("#botLeft").addEventListener('click', () => {
            if (document.querySelector("#botLeft").innerHTML === "") {
            writeToDiv("#botLeft")
        }
        else {
            console.log(gameboard)
        }
        })
    }

    const pressSquareEight = () => {
        document.querySelector("#botMid").addEventListener('click', () => {
            if (document.querySelector("#botMid").innerHTML === "") {
            writeToDiv("#botMid")
        }
        else {
            console.log(gameboard)
        }
        })
    }

    const pressSquareNine = () => {
        document.querySelector("#botRight").addEventListener('click', () => {
            if (document.querySelector("#botRight").innerHTML === "") {
            writeToDiv("#botRight")
        }
        else {
            console.log(gameboard)
        }
        })
    }

    const checkIfDraw = (a) => {
        return a !== ""
    }

    const winCondtion = () =>{

        if (gameboard[0] === "X" && gameboard[1] === "X" && gameboard[2] === "X"){
            document.querySelector(".gameTitle").innerHTML = playerOne.name + " Wins";
            openForm();
        }
        else if (gameboard[3] === "X" && gameboard[4] === "X" && gameboard[5] === "X") {
            document.querySelector(".gameTitle").innerHTML = playerOne.name + " Wins";
            openForm();
        }
        else if (gameboard[6] === "X" && gameboard[7] === "X" && gameboard[8] === "X"){
            document.querySelector(".gameTitle").innerHTML = playerOne.name + " Wins";
            openForm();
        }
        else if (gameboard[0] === "X" && gameboard[3] === "X" && gameboard[6] === "X"){
            document.querySelector(".gameTitle").innerHTML = playerOne.name + " Wins";
            openForm();
        }
        else if (gameboard[1] === "X" && gameboard[4] === "X" && gameboard[7] === "X"){
            document.querySelector(".gameTitle").innerHTML = playerOne.name + " Wins";
            openForm();
        }
        else if (gameboard[2] === "X" && gameboard[5] === "X" && gameboard[8] === "X"){
            document.querySelector(".gameTitle").innerHTML = playerOne.name + " Wins";
            openForm();
        }
        else if (gameboard[0] === "X" && gameboard[4] === "X" && gameboard[8] === "X"){
            document.querySelector(".gameTitle").innerHTML = playerOne.name + " Wins";
            openForm();
        }
        else if (gameboard[2] === "X" && gameboard[4] === "X" && gameboard[6] === "X"){
            document.querySelector(".gameTitle").innerHTML = playerOne.name + " Wins";
            openForm();
        }

        else if (gameboard[0] === "O" && gameboard[1] === "O" && gameboard[2] === "O"){
            document.querySelector(".gameTitle").innerHTML = playerTwo.name + " Wins";
            openForm();
        }
        else if (gameboard[3] === "O" && gameboard[4] === "O" && gameboard[5] === "O") {
            document.querySelector(".gameTitle").innerHTML = playerTwo.name + " Wins";
            openForm();
        }
        else if (gameboard[6] === "O" && gameboard[7] === "O" && gameboard[8] === "O"){
            document.querySelector(".gameTitle").innerHTML = playerTwo.name + " Wins";
            openForm();
        }
        else if (gameboard[0] === "O" && gameboard[3] === "O" && gameboard[6] === "O"){
            document.querySelector(".gameTitle").innerHTML = playerTwo.name + " Wins";
            openForm();
        }
        else if (gameboard[1] === "O" && gameboard[4] === "O" && gameboard[7] === "O"){
            document.querySelector(".gameTitle").innerHTML = playerTwo.name + " Wins";
            openForm();
        }
        else if (gameboard[2] === "O" && gameboard[5] === "O" && gameboard[8] === "O"){
            document.querySelector(".gameTitle").innerHTML = playerTwo.name + " Wins";
            openForm();
        }
        else if (gameboard[0] === "O" && gameboard[4] === "O" && gameboard[8] === "O"){
            document.querySelector(".gameTitle").innerHTML = playerTwo.name + " Wins";
            openForm();
        }
        else if (gameboard[2] === "O" && gameboard[4] === "O" && gameboard[6] === "O"){
            document.querySelector(".gameTitle").innerHTML = playerTwo.name + " Wins";
            openForm();
        }
        else if (gameboard.every(checkIfDraw)){
            document.querySelector(".gameTitle").innerHTML = "Draw";
            openForm();
        }
        else {
            console.log("Error")
        } 
    }
    
    return  {
        startButton,
        pressSquareOne,
        pressSquareTwo,
        pressSquareThree,
        pressSquareFour,
        pressSquareFive,   
        pressSquareSix,
        pressSquareSeven,
        pressSquareEight,
        pressSquareNine,
        writeToDiv,
        winCondtion,
    }
}
)();

tickyTacky.startButton();
tickyTacky.pressSquareOne();
tickyTacky.pressSquareTwo();
tickyTacky.pressSquareThree();
tickyTacky.pressSquareFour();
tickyTacky.pressSquareFive();
tickyTacky.pressSquareSix();
tickyTacky.pressSquareSeven();
tickyTacky.pressSquareEight();
tickyTacky.pressSquareNine();

function openForm(){
    document.querySelector("#myForm").style.display="block";
    document.querySelector(".newGameButton").style.display = "none";
}
function closeForm(){
    document.querySelector("#myForm").style.display="none";
    document.querySelector("#topLeft").innerHTML = "";
    document.querySelector("#topMid").innerHTML = "";
    document.querySelector("#topRight").innerHTML = "";
    document.querySelector("#midLeft").innerHTML = "";
    document.querySelector("#midMid").innerHTML = "";
    document.querySelector("#midRight").innerHTML = "";
    document.querySelector("#botLeft").innerHTML = "";
    document.querySelector("#botMid").innerHTML = "";
    document.querySelector("#botRight").innerHTML = "";
    document.querySelector(".newGameButton").style.display = "initial";
}