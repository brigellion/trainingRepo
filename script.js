'use strict';

function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function queryNumber() {
    let magicNumber = getRandomNumber(),
        amountTry = 10;
    function question() {
        let input = prompt('Угадай число от 1 до 100');
        if (input === null) {
            alert('Игра окончена');
        } else {
            input = Number(input);
            if (input > 0) {
                if (--amountTry) {
                    if (input > magicNumber) {
                        alert('Загаданное число меньше, осталось попыток: ' + amountTry);
                        question();
                    } else if (input < magicNumber) {
                        alert('Загаданное число больше, осталось попыток: ' + amountTry);
                        question();
                    } else if (input === magicNumber) {
                        if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                            queryNumber();
                        }
                    }
                } else {
                    if (confirm('Попытки закончились, хотите сыграть еще?')) {
                        queryNumber();
                    }
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