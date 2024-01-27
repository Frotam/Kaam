const array=[1,2,3,4,5,6,7,8,9  ]
// want to add no 10 to all of the numbers 

 const newnum=array.map((num)=>{
  return num +10
})
// console.log(newnum)

// by for each 
array2=[]
array.forEach((item)=>{
    array2.push(item+10)
})
// console.log(array2)

//chaining method

const newn=array
                    .map((num)=>num*10) // multipy the items with 10
                    .map((num)=>num+1) // multiplyed items will come here and 1 will be added
                    .filter((num)=>num>40) // now they  will be filtered 
console.log(newn)