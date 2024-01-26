const user={
    user:'sid'
    ,price:300,
    welcomeMessage: function(){
        console.log(`welcome ${this.user}`)//here this will refer to te current context 
    }
}
// user.welcomeMessage()
// user.user='sami'
// user.welcomeMessage()
let user1=function (){
    let username='hula'
    console.log(this.username)
}
// user1() //this gives undefined 
//arrow  function
let user2=()=>{
    let username='hula'
    console.log(this)
}
user2()
//study the diffrence b/w arrow function and function

//             implicit return 
const sum=(num1,num2)=>num1+num2
console.log(sum(1,2))