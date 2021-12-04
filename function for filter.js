// 1. we have a build-in method arr.filter(f) for arrays. It filters all elements through the function f.
// If it returns true, then that elements is returned in the resulting array.

// make a set of ready to use filter.
// inBetween(a, b)  betqeen a and b or equel to them (inclusively включительно )
// inArray([...])  in the given array.
// arr.filter(inBetween(a, b)) - selects only values between 3 and 6.
// arr.filter(inArray([1,2,10])) select only elements matching with one of the members of [1, 2, 3]


function inBetween(a, b){
   return function(item, index, arr){ return item >= a && item <= b }
}
arr.filter(inBetween(2, 5))

