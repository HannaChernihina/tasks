// 1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
const checkIsArray = function(input){
  return Array.isArray(input)
}
checkIsArray('w3resource');
checkIsArray([1, 2, 4, 0]);

// _____________________________________________________________________
// 2. Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
const copyArray = function(arr){
  return arr.copyWithin(0)
}
console.log(copyArray([1, 5, 4, 0]))


// _______________________________________________________________________
// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
const first = function(arr, n){
    if(n == null ){
    return arr[0]
    }
    return arr.splice(0, n)
}

console.log(first([7, 9, 0, -2]));

// _______________________________________________________________________
// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]
function last(arr, n){
    if(n == null ){
    return arr[arr.length - 1];
    }
    if ( n > arr.length ){
       return arr;
    }
    let x = arr.length - n;
    return arr.slice(x , n)
}

console.log(last([7, 9, 0, -2],6));

  


// _______________________________________________________________________
// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
const myColor = ["Red", "Green", "White", "Black"];
  
const joinArray = function(arr){
    return arr.join()
  }
  joinArray(myColor); //"Red,Green,White,Black"

const joinArray2 = function(arr){
    return arr.join('+')
  }
joinArray2(myColor); //"Red+Green+White+Black"

  
