// 1. вывести числа Фиббоначи в массиве и посчитать , чколько это займет время 

function fib(num){
        let arr2 = [0, 1]
    for(let i = 2; i < num ; i++){
         arr2.push(arr2[arr2.length - 1] + arr2[arr2.length - 2])
         
    }
    return arr2;
}



function timeCatch(func, ...arguments){
    let startDate = new Date();
   

    try{
       let x = func(...arguments);
        
}catch(err){
    console.log(err)
} 
finally{
   let endDate = new Date();
   let  result = Math.abs((endDate - startDate ) )
   console.log(result)
}

}


timeCatch(fib, 100000)
