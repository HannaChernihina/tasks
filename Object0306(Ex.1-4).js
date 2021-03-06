// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno
const outputKey = function(obj){
   return Object.keys(obj).join()
}
const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

outputKey(student);


// ___________________________________________________________________________________________________
// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

function delProperty(obj, key){
        delete obj[key]
  return obj;  
}
delProperty(student, 'rollno')



// ___________________________________________________________________________________________________
// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
const lengthObject function(obj) { 
    return Object.keys(obj).length;
}

// or

function lenghtObject(obj){
    let counter = 0;
    for ( key in obj ){ 
        
      counter++;
    }
console.log(counter)
}



// ___________________________________________________________________________________________________
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];
