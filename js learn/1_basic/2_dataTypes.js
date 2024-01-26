// their are 2 types of data type  
// 1. Primitive Data type
// 2. Object 

//  Primitive  Data type ( mainly 7 types)-: 
// 1. String - 'hi'
// 2. Number  - 10
// 3. Boolean - Yes/No
// 4. Null - Null
// 5. Undefined - Undefined if.e which is not defines yet
// 6. Symbol- it is used to give unique value to someting if i.e make the value uniique 
// 7. BigInt - it is  used to handel very very big numbers if if.e 56420354682354622354
 /*let string='hi'
 let number =9
 let booleant=true
 let nullv =null
 let undefinedv=undefined
 let symbol ='unique'
 let BigInt = 442872441
 console.log(string,number,booleant,nullv,undefinedv,symbol,BigInt)*/
// to check type we use typeof
// console.log(typeof nullv)
// here when we check the type of null it show object b/c it is a historical error i.e why we can not fix this as lag ammount of  programs rely on null i.e it will be difficut to change this 

 // object 
//   object contain arrays functions 
//   // array
//   let array =[]
//   // function 
//   function hi(){
//     console.log(1+2)
//   }
//   // object
//   object= {
//     name:"sidhant",
//     class:12
//   }
// if we check the type of function i.e
// console.log(typeof hi)
// it shows function but for array it shows object i.e function type is ( function object)
// console.log(typeof array)




// ****************************************************************************************************************************


// conversion i.e one data type into another data type i.e 
//  string to number 
//  let name="sidhant"
//  let conversion =Number(name)
//  console.log(conversion) // here the string does no gives the valid numberic i.e the output wiill be NaN i.e Not a number 


 //                          ways to convert string to number 
//   parseInt() or parseFloat()
// Number()
// (+)
//**************************************************** */
// number to String
// let number=20
// let change=String(number)
// console.log(typeof change) it convert no to string 
//                                       ways to convert no to string 
// toString()
// num + ""
// String()


// // number/string to booolean
//  let no=10;
//  let change=Boolean(no)
//  console.log(change)
//  it will give true i.e only 0 will give false i.e no above 0 will give true i.e only 0 will give false
// for string  it will give false if their is ""  and trye if any thing is inside "" for eg " hi" it will give true 