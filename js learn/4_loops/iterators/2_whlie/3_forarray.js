// for of loop 
const array=[1,2,3,4,5,6]
for (const iterator of array) {
    // console.log(iterator)
}


let name='sidhant sharma '
for (const iterator of name) {
    if(iterator!==' '){

        // console.log(iterator)
    }
}

// for of for map 
const map=new Map()  // map take unique values 
 map.set('In','India')
 map.set('En','England')
 map.set('Rs','Russia')
//  console.log(map)


 for (const [key,value] of map){
    // console.log(key)
    // console.log(value)
 }

//  for of for object/

const obje={
    n1:1,
    n2:2,
    n3:3
}
// for(const [key,value] of obje){
//     // console.log(` key ${key} and their value is ${value} `)  objects are not iterable simppley
// }


// we use for in loop 

const object={
    js:"java script",
    py:"python",
    sw:'swift'
}

for (const key in object) {
//   console.log(`the key is ${key} and valye is ${object[key]}`)
}




// for in loop for arrays 
let array2=[5,6,3,4,5,6]
for(const keys in array2){
    // console.log( `keys ${keys} values ${array2[keys]}` )
}
// iteration can not be done for maps 

//         for each loop





let arr=['sid','ram','shyam','rohan'] 

// arr.forEach(function (item){
//     console.log(item)
// })
arr.forEach( (anyname)=>{
// console.log(anyname)
}   )


//  this also act same 
 function print(item){
    console.log(item)
 }
//  arr.forEach(print)




 arr.forEach((item,index,arraylist)=>{
    // console.log(item,index,arraylist)
 })

 // suppose we have objects inside array how to acess them 

let arr1=[
    {
        name:'sidhant',
        class:12
    },
    {
        name:'rohan',
        class:12
    },
    {
        name:'sohan',
        class:12
    }
]

arr1.forEach((item)=>{
    console.log(item.name,item.class)
})



 // simple project of calculating the total number of  0 and 1 in number by using for each loop 
    



let zero=0
let one=0
let number=1101110101
let array5= Array.from(String(number),number) // this will create the array of string back to number 
array5.forEach((item)=>{
    if(item==='1'){
        one++
    }
    else{
        zero++
    }
})
console.log(` zeroes=${zero} , one =${one}`)