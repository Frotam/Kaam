// object through constructor 

let user= new Object()
 user.name='lover'
 user.id=123
 user.login=false

//  console.log(user) 

//declaration of object inside object / nesting object 
let user1={
    name:'lala',
    fullname:{
        username:{
            firstname:'sidhant',
            lastName:'sharma'
        }
    }
}
// console.log(user1.fullname)
// console.log(user1.fullname.username)


//merrging values of objects / objects merging 
let obj1={1:'a',2:'b'}
let obj2={8:'m',4:'n'}
// let boj3={obj1,obj2}
//  let boj3=Object.assign(obj1,obj2)
// console.log(boj3)
//   or 
let boj3=Object.assign({},obj1,obj2)  //as this is th right way to assin the value
// console.log(boj3)


// methods of arrays 
// 1. To get keys and values of object 
// console.log(Object.keys(user1))
// console.log(Object.values(user1)) 
// 2. entries  this will convert thevalues into arrays 
// console.log(Object.entries(user1))


// how to find that the value exist insidde the object 
// console.log(user1.hasOwnProperty('fullname'))