1) 
Write function getUserInfo which receive user object + string with key for user data.
For example;
obj  = {fullName: "fds fds", age: 5}
key = "age"
return 5;


function getUserInfo(name, year){ 
const obj = {};
obj.fullName = name;
obj.age = year;
const result = obj.age;
return result;
}
getUserInfo('Hanna', 25);

_______________________________________________________________________________________
2) Write function checkPropInObj which receive object and property and return true/false
For example;
obj  = {fullName: "fds fds", age: 5}
property = "age"
return true/false
return 5;

function checkPropInObj(e){ 
   key = 'age';
 const x = key in e;
    return x;
}
obj  = {fullName: "fds fds", age: 5};
checkPropInObj(obj);