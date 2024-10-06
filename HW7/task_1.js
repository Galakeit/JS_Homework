"use strict"

function new_task (number, name) {
    console.log(`--------- Task ${number}. ${name} ---------`)
}
new_task(1,'Бесконечные аргументы');

function mergeArray(...range) {
    let new_range = [];
    for (let i of range) {
     new_range = [...new_range,...i];
  } return new_range
}
  
  console.log(mergeArray([1,2], [3,4], [5,6]))

new_task(2, 'Devide by _');

function camelText (text) {
const replace_text = text.replaceAll(' ','_,').split(',');

for (let i=0; i < replace_text.length; i++) {
    if (i==0) {
        let slice_word = replace_text[i];
        replace_text[i] = slice_word[0].toLowerCase() + slice_word.slice(1);
    } else {
        let slice_word = replace_text[i];
        replace_text[i] = slice_word[0].toUpperCase() + slice_word.slice(1).toLowerCase(); 
    }
}
return replace_text.toString().replaceAll(',','');
}

console.log(camelText('I am super engineer'))

new_task(3, 'Фибаначчи')

//0, 1, 1, 2, 3, 5, 8, 13, 21,

function fibanacci(n) {
    let a = 1;
    let b = 1;
for (let i = 3; i <= n; i++) {
   let c = a + b;
   a = b;
   b = c;}

    return b;
} 

console.log(fibanacci(4))
