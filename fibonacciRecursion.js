 
// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 

// 2)  Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

// 3) Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two. 




// 1. Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2 
function fibonacci(n){
if(n === 0)
    return 0;
if(n===1)
    return 1;
return fibonacci(n-1) + fibonacci(n-2)

}
fibonacci(5)

// через цикл 
function fib(num){
        let arr2 = [0, 1]
    for(let i = 2; i < num ; i++){
         arr2.push(arr2[arr2.length - 1] + arr2[arr2.length - 2])    
    }
    return arr2;
}




// ____________________________________________________________________________________________________________________________________
//2. написать функцию factorial(n), которая возвращает n!, используя рекурсию. 
// n! = n * (n - 1) * (n - 2) * ...*1   формула
// Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
function factorial(n){
if(n < 0 ) return 0;
if(n == 1 ) return 1;
return n * factorial(n-1);
}
factorial(5)
//120

function factorial(n){
if(n < 0 || n == 1 ) return 1;
return n * factorial(n-1);
} 
// или более краткая через тернарный оператор
function factorial(num){
    return (num != 1) ? num * factorial(num - 1 ) : num;
}

// через цикл for
function factorialTwo(n){
    let result = 1;
    for(i = n; i > 1; i--){
        result *= i;  
    }
   return  result;
}

// через цикл while
function factorialize(num) {
  let result = num;
  if(num === 0 || num === 1){
    return 1;
  }
  while(--num){
    result =num*result;
  }
  return result;
}
// _________________________________________________________________________________________________________





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




// 5. Вывести числа Фиббоначи от и до того что передадим
function numFibonacci(n){
   let arrNew = [0, 1];
   
   for(let i = 0; i < arrNew.length; i++){
     x =   arrNew.push(arrNew[arrNew.length - 1] + (arrNew[arrNew.length - 2] ))

    }
    return arrNew;
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
