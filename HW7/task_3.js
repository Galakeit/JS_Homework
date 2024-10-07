"use strict"

function new_task (number, name) {
    console.log(`--------- Task ${number}. ${name} ---------`)
}

new_task(1,'Рекурсивная функция');

function recurse(num){          
    const range_num = [...num.toString()] 
    let result = 0;             
    for (let sum_range of range_num) {         
        result = Number(result) + Number(sum_range);}
    if (result <= 9) {      
        return  result ;   
    } else { 
        return recurse(result)} 
    } 
console.log(recurse(155));