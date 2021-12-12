// 1.
// function User(firstName, birthday) {
// this.firstName = firstName
// this.birthday = birthday
// }
// create get & set for "age" property
// get age -calculate duration time from birthday in years
// set age - set age from today - number of ages
// set -> Date.now() - age (from setter
// get  {
// Date.now - birthday 
// }

function User(firstName, birthday) {
  this.firstName = firstName;
  this.birthday = birthday;

  Object.defineProperties(this, {
      age: {
          enumerable: true,
          configurable: true,

          get(){

             let yearMs = Date.now() - Date.parse(this.birthday);
             let year = new Date(yearMs);
             let result =  Math.abs( year.getUTCFullYear() - 1970 )

             return ${this.firstName} - ${result};

          },

          set(age){  

          let data = new Date();
          let yearNow = data.getFullYear() - age
          data.setFullYear(yearNow)
          this.birthday = data;
          }
     }
  })
}
// _______________________________________________________________________________________



function User(fullName){

   this.fullname = fullName;
        Object.defineProperties(this,{
            

        firstName:{
               get(){
                  return firstName
                    
               },

             set(fullname){
                [firstName] = fullname.split(' ')[0]
             },
        },
    
        lastName:{
              get(){
                return lastName
               },

             set(fullname){
               [lastName] = fullName.split(' ')[1]
             },
        }
         

        });

   
}

