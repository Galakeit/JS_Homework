"use strict"
//1.1
let minValue = 0
let maxValue = 20
for (let i = maxValue; i >= minValue; i -= 2) {
    console.log(i)
}

//1.2

minValue = 0
maxValue = 10

let smile = ""

for (let i = maxValue; i > minValue; i -= 1) {
    let repeat = ":)"
    smile = smile+repeat
    console.log(smile)
}

//1.3

let text = 'Hello! I am a JS student!'
console.log(text.replaceAll(' ',1))