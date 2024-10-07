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
  const replace_text = text.toLowerCase().split(' ');

  for (let i=0; i < replace_text.length; i++) {
    const slice_word = replace_text[i];
    if (i !== 0) {
      replace_text[i] = slice_word[0].toUpperCase() + slice_word.slice(1);
    }
  }
  return replace_text.join('_');
}

console.log(camelText('I am super engineer'))

new_task(3, 'Фибаначчи')

//0, 1, 1, 2, 3, 5, 8, 13, 21,

function fibanacci(n) {
    let a = 0;
    let b = 1;
for (let i = 2; i <= n; i++) {
   const c = a + b;
   a = b;
   b = c;}

    return b;
} 

console.log(fibanacci(4))
