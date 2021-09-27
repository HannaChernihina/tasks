1. separate a string into words


function str(e){
   let x = [];
    for(let i = 0; i < e.length; i++){
        x.push(e[i])
    }
console.log(x)
}
________________
function str(e){
   let x = [...e];
console.log(x)
}
_____________________
function str(e){
    let x = e.split('')
console.log(x)
}
________________________

let str2 = ([...e]) => e
