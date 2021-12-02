'use strict';

let magicNumber = 77;

function queryNumber(num) {
    function question() {
        let input = prompt('Угадай число от 1 до 100');
        if (input === null) {
            console.log(input, typeof input);
            alert('Игра окончена');
        } else {
            input = Number(input);
            if (input > 0) {

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
        }
    }
    question();
}

queryNumber(magicNumber);