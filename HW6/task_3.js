const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
const unique_number = [range[0]];

for (let i = 1; i <= range.length-1; i) {
  if (unique_number.includes(range[i])){
    range.splice(i,1);
  } else {
    unique_number.push(range[i])
    i++
  }
}
console.log(`В конце получилось получилось: основной массив ${range} \n  уникальный массив ${unique_number}` )


//извращенская идея отрезать с конца, чтобы поиграться с индексами
const range1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
const new_range1 = [...range1];
for (let i = -1; i >= (range1.length - (range1.length * 2)); i) {
  if (new_range1.slice(0,i).includes(range1.at(i))){
    range1.splice(i,1)
    new_range1.splice(i,1)
  } else {
    i--;
  }
}
console.log(`В конце получилось получилось: основной массив ${range1}`)