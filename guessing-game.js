const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let secretNumber;
let turns;
let msg = ['Too high!', 'Too low', 'Enter a Guess: ', 'Correct!'];

function askLimit() {
    rl.question('Enter the number of turns that you want to play: ', (turn) => {
        turns = turn;

        askRange();
    })
}

function askRange() {
    rl.question('Enter a min number: ', (min) => {
        let minimum = Number(min);

        rl.question('Enter a max number: ', (max) => {

            let maximum = Number(max);

            init(minimum, maximum);
        });
    });
}

function init(min, max) {
    if (secretNumber === undefined) {
        secretNumber = Math.round((Math.random() * (max - min) + min));
    }

    rl.question(msg[2], askGuess);
}

function checkGuess(num) {
    if (num > secretNumber) {
        return msg[0];
    }

    if (num < secretNumber) {
        return msg[1];
    }

    if (secretNumber === num) {
        return msg[3];
    }
}

function askGuess(str) {
    let num = Number(str);
    let response = checkGuess(num);

    console.log(response);

    if (response === msg[3]) {
        console.log('YOU WON.');

        rl.close();

        return;
    }

    turns--;

    if (turns === 0) {
        console.log('You ran out of turns :-/ ... Try again!');

        rl.close();

        return;
    }

    rl.question(msg[2], askGuess);
}

askLimit();
