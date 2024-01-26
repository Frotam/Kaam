let array = new Array(1,2,3,4,5,6)

//when we create copies in array it create shallow copies 
//  shallo copies- the are the ccopies whose properties share the same refrence point   (Heap)
// deep copies - the are the ccopies whose properties do not share the same refrence point (strack) 

// Array Methods 

//push()  add values to  last of array
array.push(10)
// console.log(array)
// pop() removes the last value of the array 
array.pop()
// console.log(array)


// unshift() adds the value to the first index of the array i/e not used usually 
array.unshift(55)
// console.log(array)
// shift() removes the first element of array
array.shift()
// console.log(array)


// includes()  help theuser to find someting in array in true and false 
// console.log(array.includes(1))



// join() Adds all the elements of an array into a string, separated by the specified separator string. converst the array into string
 let NewArray=array.join()
//  console.log(array)
//  console.log(NewArray)
//  console.log( typeof array)
//  console.log( typeof NewArray)




//***************************************slice,splice**************** */

console.log("a",array)
let MyA=array.slice(1,4)  // slice gives the specific  index elements like from 1 to 3 abd do not do the changes in orignal array the orignal array remain same 
console.log('slice',MyA)
console.log("b",array)
let MyA1=array.splice(1) // splice gives the element i.e the last element and remove it form the orignal array  for example in this array i wrote 1 this will splice the elements form 1 inex to the last index and will remove that  elements from the orignal array  also also  if we write splice(1,4) it will include the last index 4 also  but in slice it will not include  the last one 
console.log('splice',MyA1)
console.log("c",array)
console.log("d",array)
