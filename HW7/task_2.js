"use strict"

function new_task (number, name) {
    console.log(`--------- Task ${number}. ${name} ---------`)
}

new_task(1,'Палиндромом');

function palindrom(text) {
    const word = text.split(' ').reverse().join("");
    if (word.toLowerCase() === text.toLowerCase()) { 
        return 'Да, это палиндром'
    } else {
        return 'Нет, это не палиндром'
    }
}
console.log(palindrom('шалаШ'));


new_task(2,'ПОдсчет букв');


function big_word(text) {                               // объявляю функцию
    const replace_text = text.split(' ');               // преобразую в массив пришедшее предложение
    let maxLenght = [];                                 // оюъявляю новый результирующий массив
    maxLenght.push(replace_text[0]);                    // добавляю первое слово из предложение
                                                        // так как в момент старта цикла оно самое длинное 
    for (const word_length of replace_text) {           // начинаю цикл
        if (word_length.length > maxLenght[0].length) { // если длина слова из аргумента больше
                                                        // чем длина первого слова в результирующем массиве    
            maxLenght = [word_length];                  // присвой массиву новое значение
        } else if (word_length.length == maxLenght[0].length) { // если длина слова из аргумента равна 
                                                        // длине перового слова в результирующем массиве
            maxLenght.push(word_length);                // то добавляю это слово в результирующий массив на последнее место
        } else {}                                       //если иное (то есть длина меньше), то ничего не делаю
    } return maxLenght                                  // возвращаю результирующий массив
    }
 
console.log(big_word('I am super engineer engineer'))