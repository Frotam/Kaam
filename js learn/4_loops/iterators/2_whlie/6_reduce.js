const array=[1,2,3,4,4]
const total =array.reduce((acc,currentv)=>{
     console.log(`acc value : ${acc}, currentcv value : ${currentv}`)
    return (acc+currentv)         // here the acc will be asigned to value 0 then curentv which will start from arrays first element will be added to acc then acc will store the total and currentv will get new value

 },0)
//  console.log(total)



let cart=[
    {
        item:'apple',
        price:50
    },
    {
        item:'mango',
        price:60
    },
    {
        item:'dragonf ',
        price:80
    },
]
 let totaal=cart.reduce((acc,item)=>{
   return acc+ item.price
},0)
console.log(totaal)