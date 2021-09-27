function Calculator(){

 this.read = function (num1, num2){
        this.num1 = num1;
        this.num2 = num2;
};

   this.sum = function(){
     return this.num1 + this.num2;  
};
    this.mul =  function(){
    return this.num1 * this.num2;
};

  
}





let obj = {};

function A(){
return obj;
}
function B(){
return obj;
}

let a = new A;
let b = new B;

console.log(a == b )
VM819:13 true
