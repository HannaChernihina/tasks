// 1. we have a build-in method arr.filter(f) for arrays. 
// make a set of ready to use filter
// inBetween(a, b)  betqeen a and b or equel to them (inclusively включительно )
// inArray([...])  in the given array.


function inBetween(a, b){
   return function(item, index, arr){ return item >= a && item <= b }
}
arr.filter(inBetween(2, 5))

