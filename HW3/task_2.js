'use strict';

let input_number = 6;
const number_str1 = String(input_number);

const number_str2 = number_str1 + number_str1;
const number_str3 = number_str2 + number_str1;

const output_string = number_str1 + number_str2 + number_str3;
console.log(output_string);