function User(fullName){

   this.fullname = fullName;

        Object.defineProperties(this,{
          

        firstName:{
               enumerable: true,
               configurable: true,
               get (){
               return  this.fullname.split(' ')[0]
               
                    
               },

             set(firstName){
               let [ , lastNameVal] = this.fullname.split(' ')
               this.fullname = `${firstName} ${lastNameVal}` 
             },
        },


    
        lastName:{
            enumerable: true,
            configurable: true,
            get(){
                return this.fullname.split(' ')[1]
               
               },

             set(lastName){
               let [firstNameVal] = this.fullname.split(' ')
                this.fullname = `${firstNameVal} ${lastName}`
             },
        }
         

        });

}

// let j = new User('Hanna Chernihina')
// j.firstName
// 'Hanna'
// j.firstName = 'Hanna2'
// 'Hanna2'
// j.firstName
// 'Hanna2'
// j.fullname
// 'Hanna2 Chernihina'
