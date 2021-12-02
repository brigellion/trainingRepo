'use strict';

let magicNumber = 66;

function game(num, amountTry) {
    function queryNumber(num) {
        function question() {
            let input = prompt('Угадай число от 1 до 100');
            if (input === null) {
                console.log(input, typeof input);
                alert('Игра окончена');
            } else {
                input = Number(input);
                if (input > 0) {
                    if (--amountTry) {
                        if (input > num) {
                            alert('Загаданное число меньше, осталось попыток ' + amountTry);
                            question();
                        } else if (input < num) {
                            alert('Загаданное число больше, осталось попыток ' + amountTry);
                            question();
                        } else if (input === num) {
                            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                                game(Math.floor(Math.random() * (10 - 1 + 1)) + 1, 10);
                            }
                        }
                    } else {
                        if (confirm('Попытки закончились, хотите сыграть еще?')) {
                            game(magicNumber, 10);
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
    queryNumber(num);
}

game(magicNumber, 10);
