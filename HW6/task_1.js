"use strict"
//1 
const range = [1,2,3,4,5,6,7,8,9,10];
const new_range = [];
for (const i of range) {
    if (i%2 == 0) {
    let a = Math.pow(i, 2)
    new_range.push(a);
    } else {
    let b = Math.pow(i, 3)
    new_range.push(b);
    }
}
console.log(new_range) 

//2
const range1 = [1,2,3,4,5];
range1.push(6);
range1.unshift(0);
range1.splice(2,1);
range1.pop();
console.log(range1) 

//3

const range2 = [11,12,13,14,15];
const [first, second, ...rest] = range2
console.log(first);
console.log(second);
console.log(rest);  

//4
const range3 = [1,2,3,4,5];
const range3_1 = [6,7,8,9,10];
const mergedArray = [...range3, ...range3_1];
console.log(mergedArray);  

