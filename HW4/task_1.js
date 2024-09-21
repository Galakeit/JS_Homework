'use strict';

let salary = '1000';
let grade;

if (salary >= 1000) {
    grade = 'middle;'
} else if (salary < 1000) {
    grade = 'junior';
} else {
    console.log('salary is not valid, please try again');
}

