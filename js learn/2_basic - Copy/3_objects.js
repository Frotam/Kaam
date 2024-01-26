// their are two ways to declare the  objects literal and costructor 

//singeton 
//object.create
// when we declare the objects by literal the singelton is not createdd and for costructor the singelton is created

// object literals 

const user={
    name:"sidhant",
    age:18,
    male:true
}

//ways to acess the object 
// console.log(user.age)
// console.log(user["name"]);
// console.log(user["age"]);


// Q.   Declare a smbbol and then add it to object keys and acsess it
// step 1- define a symbol 
  const MySymbol=Symbol("name")
  //step 2  add the MySymbol to object by using [] brackets 
  const user1={
    name:"sidhant",
    age:18,
    [MySymbol]:'hi',
    male:true
}

// step 3 to acess it use [] 

// console.log(user1[MySymbol])



// how to change values of Object

user1.name="boogiMan"
// console.log(user1["name"])


// How to lock the values of object in js if i.e they can't be changed 
// Object.freeze(user1)
user1.age=19
// console.log(user1)

// how to add function inside object 
user1.grettins=function(){
    console.log("hllo")
}


console.log(user1.grettins)
console.log(user1.grettins())
// refering to other key in object using function  we usethhis. keyword inside object

user1.greeting2=function(){
    console.log(`hllo ${this.name}`)
}
console.log(user1.greeting2())