"use strict"
/*мне просто хотелось красивый обработчик некорректного ввода...
а потом это превратилось в челендж "испробуй по максимуму преобразования"
+ Шаблонные литералы 
+ Экранирование символов
+ Доступ к символам через индексы
+ Изменение регистра
+ Проверка чисел и преобразование строк в числа (Nan)
+ Регулярка
+ Замена и удаление символов в строках
+ массивы


*/


//let word = 'n' ;

//Значения переменной word для проверки:
let word_list = ['n', 'А', 'A', 'I', 'i', 'Ы', 'ы', '123iiIIT', 'aa1111', 123, '', ' ', ,] ;

let word;
let eng_vowels = 'aeiouy';
let rus_vowels = 'аеёиоуыэюя';
let count_vowels = 0;
let count_consonants = 0;



for (let wl = word_list.length -1; wl >=0; wl --) {
    word = word_list[wl];
    console.log(word)
    if (word == undefined) {
        console.log(`А вводить то некуда. Вы что, волшебник?`)
    } else if (word == ' ' ) {
        console.log(`Вы ввели пробел! Не удалось подсчитать количество букв. Попробуйте еще раз`)
    } else if (typeof word == 'number') {
        console.log(`Вы ввели ${word}! Это цифра! Вы пытаетесь меня обмануть? Не надо так. Серьезно.`)
    } else if (word == '') {
        console.log(`Вы ничего не ввели. Вы точно знаете чего хотите?`)
    } else if (typeof word === 'string' ) {
        word = word.toLowerCase();
       
        if (Number.isNaN(parseInt(word))) {
            
            if (word.match(/\d+/)) {
                word = word.replace(/[0-9]/g, '');
             for ( let i = (word.length) -1; i >= 0; i-- ) {   
                if (eng_vowels.indexOf(word[i]) !== -1 || rus_vowels.indexOf(word[i]) !== -1) {
                    count_vowels = count_vowels + 1;
                } else if (eng_vowels.indexOf(word[i]) == -1 || rus_vowels.indexOf(word[i]) == -1) {
                    count_consonants = count_consonants + 1;
                }
            }
                console.log(`Вы думали я Вас не переиграю с вашими буквами и цифрами? Неа. Получай свои буквы, человешка.\nword contains ${count_vowels} vowels and ${count_consonants} consonants`)
                count_vowels = 0;
                count_consonants = 0;
            } else {
                for( let i = ((word.length) -1); i >= 0; i-- ) { 
                    if (eng_vowels.indexOf(word[i]) !== -1 || rus_vowels.indexOf(word[i]) !== -1) {
                        count_vowels = count_vowels + 1;
                    } else if (eng_vowels.indexOf(word[i]) == -1 || rus_vowels.indexOf(word[i]) == -1) {
                        count_consonants = count_consonants + 1;
                    } console.log(`Ура! Я могу это посчитать! \nword contains ${count_vowels} vowels and ${count_consonants} consonants`)
                    count_vowels = 0;
                    count_consonants = 0;
    
    }}} else {
            if (typeof parseInt(word) == 'number') {
            word = word.replace(/[0-9]/g, '');
          
                for ( let i = (word.length) -1; i >= 0; i-- ) { 
                    if (eng_vowels.indexOf(word[i]) !== -1 || rus_vowels.indexOf(word[i]) !== -1) {
                        count_vowels = count_vowels + 1;
                    } else if (eng_vowels.indexOf(word[i]) == -1 || rus_vowels.indexOf(word[i]) == -1) {
                     count_consonants = count_consonants + 1;
                    }
                }
               
                console.log(`Вы думали false я Вас не переиграю с вашими цифрами и буквами? Неа. Получай свои буквы, человешка.\nword contains ${count_vowels} vowels and ${count_consonants} consonants`)
                count_vowels = 0;
                count_consonants = 0;
            } 
        }
    }}