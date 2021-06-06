// 1) 
// Write function getUserInfo which receive user object + string with key for user data.
// For example;
// obj  = {fullName: "fds fds", age: 5}
// key = "age"
// return 5;

function getUserInfo(e){ 
return user['age'];
}

const user = {
               age: 25,
              };
getUserInfo(user);

// _______________________________________________________________________________________
// 2) Write function checkPropInObj which receive object and property and return true/false
// For example;
// obj  = {fullName: "fds fds", age: 5}
// property = "age"
// return true/false

function checkPropInObj(e){ 
 return 'age' in e;
}

obj  = {fullName: "fds fds", age: 5};
checkPropInObj(obj);
