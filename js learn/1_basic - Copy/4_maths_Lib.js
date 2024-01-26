// let no=-5
// console.log(Math.abs(no)) // convert the negative value to the positive value 
// let no2=5.5
// console.log(Math.round(no2)) // gives the round of value 
// console.log(Math.ceil(5.1)) // gives the next value if their is any no in points
// console.log(Math.floor(5.9)) // gives the previous value i.e te orignal value  if their is any value in points i.e eleminate the point values
// console.log(Math.sqrt(25)) // gives the sq rooot of value
// console.log(Math.min(25,54,2,46,5)) // gives the min value from the array
// console.log(Math.max(25,54,2,46,5)) // gives the max value from the array


//****math.random***** */
console.log(Math.random()) //give the random values between 0 and 1

// to get the values in simple no we will use Math.floor and muliply the random no with 10 to get the single digit value 
console.log(Math.floor(Math.random()*10))
// now i want that i must get a minimun valuue of 1 not 0 i.e i wiill add 1 in it 
console.log((Math.floor(Math.random()*10))+1)

// another way if the min and max is given to us the formula is  (max-min+1)+min
min=10
max=120
console.log(Math.floor(Math.random()*(max-min+1))+min)


