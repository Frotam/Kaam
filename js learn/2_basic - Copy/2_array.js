let array=['namak' ,'mirch' ,'masala']
let array2=['dal','chawal','sabji']

// array.push(array2)
// console.log(array)  this creates the new array inside the array and  to aces we have to use[3][2] which is not refered as aa good syntax in js
 let change =array.concat(array2)
// console.log(change)    this is more prefersed as it will join the 2 arrays and  improves the redabiliity


// other better alternative  because using spread we can add more than 2 values with each odher as compare to concat
//  spread operator 
 let newa = [...array,...array2]
//  console.log(newa) 

let newArray=[1,2,3,[5,6,7],8,[1,2,3,[2,4,5]]]  
//to deal  with these type of array  we use flat( no of arrays want to concatinate) this will concatinate the sub arrays i.e the arrays inside arrays 
let AnotherArray=newArray.flat(2)
// console.log(AnotherArray)


//to check weter the given thing is array or not 
console.log(Array.isArray('sidhant'))


// now to convert the thing into array we use from 
console.log(Array.from('sidhant'))



console.log(Array.from({  //this willl give output {} because it is not defined that of what we want to make array i.e of keys or of values 
    name:'sidhant',
    another_Name: 'hitesh'
}))

console.log(Array.from(Object.values({ name:'sidhant',   // makes the array of values 
another_Name: 'hitesh'
})))


console.log(Array.from(Object.keys({ name:'sidhant',
another_Name: 'hitesh'
})))




// conversion of the elements into array   using of

let a=10
let b=20
let c=50
console.log(Array.of(a,b,c))