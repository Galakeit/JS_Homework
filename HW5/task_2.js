"use strict"

let minValue = 1
let maxValue = 100


for (let i = minValue; i <= maxValue; i++ ) {
    if (Number.isInteger(i / 3)) {
        if (Number.isInteger(i / 5)) {
            console.log(`Число ${i} - делится без остатка и на 3 и на 5`)
        } else {
            
            console.log(`Число ${i} - делится без остатка на 3`)
        }
    }
    else if (Number.isInteger(i / 5)) {
        console.log(`Число ${i} - делится без остатка на 5`)
        }

    else  {
        console.log(`Число ${i} -  не делится без остатка на 3 или 5`)
        
        }
    }
    
