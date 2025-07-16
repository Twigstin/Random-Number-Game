
const computer = document.getElementById("comp");
const user = document.getElementById("user");
const result = document.getElementById("result");
const one = document.getElementById("btn1");
const two = document.getElementById("btn2");
const three = document.getElementById("btn3");
const four = document.getElementById("btn4");
const five = document.getElementById("btn5");
const six = document.getElementById("btn6");
const seven = document.getElementById("btn7");
const eight = document.getElementById("btn8");
const nine = document.getElementById("btn9");
const ten = document.getElementById("btn10");

//create a function to automatically generate random numbers between 1 and 10
function randomNum(){
    let box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let index = Math.round(Math.random() * (box.length - 1));
    return box[index];
}

//create a function that checks if user guessed correctly
function check(first, second){
    if(first === second){
        return true
    } else {
        return false;
    }
}

function press(num){
    let comp = randomNum();
    let test = check(num, comp);
    if(test === true){
        computer.textContent = `Computer Chose: ${comp}`;
        user.textContent = `You Chose: ${num}`;
        result.textContent = "You Guessed Right!"
    } else {
        computer.textContent = `Computer Chose: ${comp}`;
        user.textContent = `You Chose: ${num}`;
        result.textContent = "You Guessed Wrong!"
    }
}

one.addEventListener('click', () => press(1));
two.addEventListener('click', () => press(2));
three.addEventListener('click', () => press(3));
four.addEventListener('click', () => press(4));
five.addEventListener('click', () => press(5));
six.addEventListener('click', () => press(6));
seven.addEventListener('click', () => press(7));
eight.addEventListener('click', () => press(8));
nine.addEventListener('click', () => press(9));
ten.addEventListener('click', () => press(10));