 // 1. Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2 
function fibonacci(n){
if(n === 0)
    return 0;
if(n===1)
    return 1;
return fibonacci(n-1) + fibonacci(n-2)

}

fibonacci(5)


//2. факториал числа 
function factorial(n){
if(n < 0 ) return
if(n == 1 ) return n;
return n * factorial(n-1);
}
factorial(5)
//120


//3. факториал чисел из массива
const arr = [1, 2, 3, 4, 5];
function getFactorial(arr){
    let factorial = arr.shift();
    if(arr.length != 0 ){
        factorial *=  getFactorial(arr); 
    }   
    return factorial; 
}


// ---------------------
//4. A: От 1 до n
// натуральное число n. Выведите все числа от 1 до n.

function numAll(n){
  if(n == 0) return ;
    console.log(n)
  return numAll(n - 1);
   
}

//5. Даны два целых числа A и В (каждое в отдельной строке). 
// Выведите все числа от A до B включительно, в порядке возрастания, 
// если A < B, или в порядке убывания в противном случае.
function num(n, x){
    if( n == 0) return 0;
    if( x == 0) return 0;

    if( n < x){
    console.log(n)
    return num(n + 1, x)
    }
    if(n > x){
    console.log(x)
    return num(n, x - 1)
    }

}
