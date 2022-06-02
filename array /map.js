// a=[1,3,4,5,8,2]
// // foreach vs map 



// a=[1,3,4,5,8,2]
// // a.forEach(myfunction)
// // var num

// // function myfunction(index, item){
// //     return (item*2)

    
// // }
// // console.log(a)


// // let b=a.map(callback,)

// let newarray=a.map(function(item,index){
//     console.log(item*2)
// })
// console.log(newarray)




// // let's construct new array
// let bachha = ['chinntu','pintu','babey','babu']
// let mrbachha=[]
// for (let i=0; i<bachha.length;i++){
//     mrbachha.push(`mr ${bachha}`)
// }
// // console.log(mrbachha)

// // console.log(bachha)

// // solve mrbachha using foreach
// let foreachbachh=bachha.forEach(function(elem,index){
//     return("synab")
// })
// console.log(foreachbachh)

// const mrbachha1=bachha.map(elem=>`mr ${elem}`)
// console.log(mrbachha1)

// let bachha = ['chinntu','pintu','babey','babu']
// let foreachbachh=bachha.forEach(elem=>`mr ${elem}`)

// console.log(foreachbachh)

arr=[12,3,4,5,7]
a=[1,2,3,4,5,6,7]
let b = a.map(function(item,index){
   return (item*2)

})
console.log(b)
sum=0
for( i of a){
    sum+=i
}
console.log(sum)

sum=a.reduce((accumlator,curelem)=>{
     return accumlator=accumlator+curelem

},7)
console.log(sum)

// newarr=arr.map((elem)=>{
//     if (elem%2==0){
//         return elem*elem
//     }

// })
// console.log(newarr)
// newarr=arr.map((elem)=>{
//     return elem*elem

// })

// a=arr.filter((elem)=>{
//         if (elem%2==0){
//             return elem
//         } 
//     })
// console.log(a)

// newarr=a.map((elem)=>{
//     return elem*elem

// }).filter((elem)=>{
//     if (elem%2==0){
//         return elem
//     } 
// })
// // console.log(newarr)
// // newarr1=arr.filter((elem)=>{
// //     if (elem%2==0){
// //         return elem
// //     } 
// // })
// // reduce 

// sum=arr.reduce((elem,acc))

// // console.log(newarr1)








// // a=function(elem){
// //     return (`mr ${elem}`)
// // }


// // bachha1 = ['chinntu','pintu','babey','babu']
// // var bachha1=()=>{
// //     console.log("mr")
// // }
// // bachha1()





a= [1,2,3,4,6]
b=a.filter((elem)=>{
    if (elem%2==0){
        return elem
    }
}).map((elem)=>{
    return elem*elem
}).reduce((accumlator,curlem)=>{
   return accumlator=accumlator+curlem
},2)
console.log(b)


