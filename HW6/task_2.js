"use strict"

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const my_pizzas = ['DiaBlO', 'Margarita', 'Burger', 'HaWai']
const my_pizzas_full_copy = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const competitorPizzas_upper = [];
const unique_pizzas = [];
const not_unique_pizzas = [];
let i = my_pizzas.length;

//Приводим массив конкурентов к нижнему регистру

for (const small_pizzas of competitorPizzas){
    competitorPizzas_upper.push(small_pizzas.toLowerCase());
}

//проверяем набор массивов, если есть копии 
for (let i = 0; i < my_pizzas.length; i++){
    if (competitorPizzas_upper.includes(my_pizzas[i].toLowerCase())) {
        not_unique_pizzas.push(my_pizzas[i]);
    } else {
        unique_pizzas.push(my_pizzas[i]);
    }
}

const message = unique_pizzas.length ?  unique_pizzas : null;
console.log(message);

//проверяем набор массивов, если ВСЕ КОПИИ, изменена только переменная списка с моими пиццами
for (let i = 0; i < my_pizzas_full_copy.length; i++){
    if (competitorPizzas_upper.includes(my_pizzas_full_copy[i].toLowerCase())) {
        not_unique_pizzas.push(my_pizzas_full_copy[i]);
    } else {
        unique_pizzas.push(my_pizzas_[i]);
    }
}
let message1 = (unique_pizzas.length >= 1) ?  unique_pizzas : 'null';
    console.log(message1);
