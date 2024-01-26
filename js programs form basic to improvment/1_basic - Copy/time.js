//*****************************************Date Object******************************* */
let date=new Date()
console.log(date )
console.log(date.toString() )
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toUTCString())
console.log(date.toTimeString())
console.log(date.toJSON())
//in js thhe mont starts from 0 i.e january  and in doboul digit 01

// let newDate= new Date(2023,10,27)
// console.log(newDate.toDateString())
let newDate= new Date(2023,10,27,5,15)
console.log(newDate.toLocaleString())