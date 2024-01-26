//iife immediately invoked function expression (iife)
// to prevent the pollution from the global variable we use iife  
(function doo(){
    // this iife is caled name iife 
    console.log('hi')
})(); //<= : is imtortant to stop the iife 
//  ()()
// (this one is for defination i.e function )() <= this one is for execution 

// orr other syntax can be as    
 ( ()=>{
    console.log('hlo')
 })();

 //       to pass a variable 
 ( (name)=>{
    console.log(`hi  ${name}`)
 })('sidhant');
