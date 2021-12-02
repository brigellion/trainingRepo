'use strict';

let magicNumber = 77;

function queryNumber(num) {
    function question() {
        const input = prompt('Угадай число от 1 до 100');
        if (input) {
            if (typeof input == 'number') {

                if (input > num) {
                    alert('Загаданное число меньше');
                    question();
                } else if (input < num) {
                    alert('Загаданное число больше');
                    question();
                } else if (input === num) {
                    alert('Поздравляю, Вы угадали!!!');
                }
            } else {
                alert('Введи число!');
                question();
            }
        } else {
            alert('Игра окончена');
        }
    }
    question();
}

queryNumber(magicNumber);