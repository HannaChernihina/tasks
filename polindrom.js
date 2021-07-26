function isPalindrom(e){

    if (e < 0 ) {
        e *= -1;
    }
    if (Number.isInteger(e)){

        let x = e.toString();

        let revers = x.split('').reverse().join('');
   console.log(revers)
        if ( x === revers){
           return true
    }
    return false
    }
}
