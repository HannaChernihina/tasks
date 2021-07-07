const Orders = [{"id":1,"productIds":[11, 12, 13, 15],"createdAt":{"$date":"2020-06-01T21:14:10.000Z"}},
{"id":2,"productIds":[11, 12, 13],"createdAt":{"$date":"2019-12-29T02:31:52.000Z"}},
{"id":3,"productIds":[11, 12],"createdAt":{"$date":"2020-07-24T08:49:35.000Z"}},
{"id":4,"productIds":[12, 13],"createdAt":{"$date":"2020-08-30T13:01:23.000Z"}},
{"id":5,"productIds":[14, 13, 11],"createdAt":{"$date":"2019-12-03T09:59:33.000Z"}}];

const products = [{
  "id": 11,
  "name": "Arnoldo",
  "price": 90
}, {
  "id": 12,
  "name": "Bronnie",
  "price": 93
}, {
  "id": 13,
  "name": "Wren",
  "price": 23
}, {
  "id": 14,
  "name": "Leupold",
  "price": 37
}, {
  "id": 15,
  "name": "Stanley",
  "price": 36
}];

// const  OrdersWithProduct = [{id: …, createdAt: …, products: [{
//   "id": 11,
//   "name": "Arnoldo",
//   "price": 90
// }]}];

function getOrderWithProduct(orders, products){
    return orders.map(order => {
       return products.filter(product => { 
         if(order.productIds == product.id){
    return;    
}
}
 } );
 
}
                      
//   ______________________________________________________
                      
function getOrderWithProduct(orders, products){
  const newORder = [...orders];
  const newProduct = [...products];

      return newORder.map(order => {
       return newProduct.filter(product => {
    
        for (let i = 0; i < order.productIds.length; i++) {
            order.productIds[i] 
            if(order.productIds[i] == newProduct.id){
                return order.productIds.concat(product);    
            } 
        }

         
}
 )} );
 
}
  
  
  
  
//   _______




function sortProduct(arr){
    const newArr = [...arr];
    newArr.sort((a, b) => {
    
    let z = a.name.toUpperCase();
    let x = b.name.toUpperCase();
    
    if(z < x ){return -1}
    if(z > x ){return 1}
    return 0;
})
return newArr;
  
 function sortNum(arr){
    const arr3 = [...arr];
    arr3.sort((a,b) => {
       if( a.price < b.price) {return -1}
       if( a.price > b.price) {return 1}
    return 0;
})
return arr3;
}
  
  
//   _____
  
  

function Orders(arr, arr2){
    const x = arr2.map(item2 => return {...item2, item2, item2} );
     const y =  arr.map(item => return {...item, item, productIds : item2});
    return y;
    
}




function getOrderWithProduct(orders, products){
    return orders.map(order => {
        if(order.isArray()) {
     const x = order.forEach((childProd) => {return childProd});
        console.log(x)
        }
    
       return products.filter(product => { 
       
         if(orders.productIds == product.id){
    return;    
}
}
 )});
 
}


// ----------------------------------

function getOrderWithProduct(orders, products){
     return orders.map((order) => ({...order,  productIds : products.filter((product) => {
    return order.productIds.find(findId => {
    return findId === product.id}
)
})} ));
}

// -----------------------------------------
  function getOrderWithProduct(orders, products){
     return orders.map((order) => ({...order,  products : products.filter((product) => {
    return order.productIds.includes(product.id)
})} ));
}



------------------
function getOrderWithProduct(orders, products){
     let x = orders.map((order) => ({...order,  products : products.filter((product) => {
    return order.productIds.includes(product.id)
})} ))
x.forEach(id => {return delete id.productIds});
return x;
}





const getOrderWithProduct = function(orders, products){
     const x = orders.map((order) => ({...order,  products : products.filter((product) => {
    return order.productIds.includes(product.id)
})} ))
x.forEach(id => {return delete id.productIds});
return x;
}
