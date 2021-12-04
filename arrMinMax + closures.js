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


