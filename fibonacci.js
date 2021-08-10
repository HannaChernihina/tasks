// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2 
function fibonacci(n){
if(n === 0)
    return 0;
if(n===1)
    return 1;
return fibonacci(n-1) + fibonacci(n-2)

}

fibonacci(5)


// факториал числа 
function factorial(n){
if(n < 0 ) return
if(n == 1 ) return n;
return n * factorial(n-1);
}
factorial(5)
//120


// факториал чисел из массива
const arr = [1, 2, 3, 4, 5];
function getFactorial(arr){
    let factorial = arr.shift();
    if(arr.length != 0 ){
        factorial *=  getFactorial(arr); 
    }   
    return factorial; 
}
