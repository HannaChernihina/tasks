
let user = {
    name: 'Hanna',
    city: 'Kharkiv',
    access: 'user',
}
let user2 = {
    name: 'Alex',
    city: 'Kharkiv',
    access: 'admin',
}

function isAdmin(){
    return this.access;
}
user.getAdmin = isAdmin;
user2.getAdmin = isAdmin;

user.getAdmin()
//"user"
user2.getAdmin()
//"admin"

// ----------------------
let user = {
name: 'Hanna',
city: 'Kharkiv',
access: 'user',
getNameUser(){return this.name},
}
user.getNameUser()
//"Hanna"
