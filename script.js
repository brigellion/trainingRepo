'use strict';

let magicNumber = 77;

function game(amountTry, num) {

    function queryNumber(num) {
        function question() {
            const input = prompt('Угадай число от 1 до 100');
            if (input) {
                if (typeof input == 'number') {
                    if (amountTry !== 0) {
                        amountTry--;
                    } else {
                        return;
                    }
                    if (input > num) {
                        alert('Загаданное число меньше, осталось попыток ' + amountTry);
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
    queryNumber(num);
}

//queryNumber(magicNumber);
game(10, magicNumber);