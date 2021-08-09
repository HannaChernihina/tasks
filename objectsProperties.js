function getNeedArrayProperties(arr, ["included properties"])
getNeedArrayProperties([{a: 1, b: 2, c: 3} ], ["a", "c"]) // [{a: 1, c: 3}]

const item = [{a: 1, b: 2, c: 3} , {a: 2, b: 3, c: 4}];
const item2 = ["a", "c"];

function getArrayProperties(arr, properties){
    return arr.map( (arrItem) => {
    const obj = {};
    properties.forEach(propertyItem => {
       obj[propertyItem] = arrItem[propertyItem]
})  
return obj;
})
}
