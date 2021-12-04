// 1. use ES6 spread operator to find the minimum value of these mumbers and log it to the console.
// And let`s log the list of numbers themselves, to make it clearer. So the output should be, foe example:
// let arr = [18, 5, 9, 8] //5

function minMax(arr){
return Math.min.apply(this, arr)
}


function min(arr){
   return arr.reduce((a,b) => {
    return  (a < b) ? a : b;
})
}


function minMax(arr){
return Math.min(...arr)
}

// 2. Write function sum that works like this: sum(a)(b) = a + b 
// замыкание
function sum(a){
  return function(b) {return a + b}
}
sum(1)(3)


// Карринг 
// создание новых функций на основе уже существующих
function sum(a, b){ return a + b}
sum.bind(this, 1)(3)

const sumOfThree = sum.bind(null, 3)

const sumfFoure = sum.bind(null, 4)
sumfFoure(5)
