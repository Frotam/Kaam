//use of rest operator 
// ... is used for both rest and spread operator 
function cart(...num){
    return num
}
//in this case this will return the array 
// console.log(cart(100,200,300))



// in some cases value 1 and value 2 are taken then the ...num is taken so the question aske is what value will be their inside ...num

function cart1(value1,value2,...num){
    return num
}
// console.log(cart1(100,200,300,400,550))//in this 100 and 200 will go inside value 1 and 2 and else will go inside num array


//how to use object in function 
const user={
    username:'sid',
    price:100
}
function objecthandel(anyObject){
    console.log(`welcome ${anyObject.username} your have chosen ${anyObject.price}rs plan`)
}
// objecthandel(user)


//  or 


// objecthandel({
//     username:'sami',
//     price:100
// })


// how to pass an array in function 
const array=[10,20,3,0,40]
function retsv(getArray){
    return getArray[1]
}
// console.log(retsv(array))/
//or

// console.log(retsv([1,2,3,4,5,6]))