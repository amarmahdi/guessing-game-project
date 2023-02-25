const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let secretNumber = 4;
let msg = ['Too high!', 'Too low', 'Enter a Guess: ', 'Correct!'];

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


    rl.question(msg[2] , askGuess);
}

rl.question(msg[2], askGuess);
