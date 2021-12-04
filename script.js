'use strict';

let magicNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

function queryNumber() {
    function question() {
        let input = prompt('Угадай число от 1 до 100');
        if (input === null) {
            alert('Игра окончена');
        } else {
            input = Number(input);
            if (input > 0) {

                if (input > magicNumber) {
                    alert('Загаданное число меньше');
                    question();
                } else if (input < magicNumber) {
                    alert('Загаданное число больше');
                    question();
                } else if (input === magicNumber) {
                    alert('Поздравляю, Вы угадали!!!');
                }
            } else {
                alert('Введи число!');
                question();
            }
        }
    }
    question();
}

queryNumber();