// console.log("let's start promise")
// let a= 7;
// console.log(a)
// function donotpromises(){
//     setTimeout(()=>{
//         a=10
//         console.log(a)
//     },2000)
// }
// donotpromises()
// console.log(a)

// let a
// console.log(a)


// console.log("let's start promise")
// let a
// console.log(a)
// function donotpromises(){
//     setTimeout(()=>{
//         a=10
//         console.log(a)
//     },2000)
// }
// donotpromises()
// console.log(a)

/*

let a 

const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        a=10
        resolve(a)            //
        reject('not defined')  //resolve ra reject dubai xa tara euta matra chalx
    },1000)
    
    
})

console.log(promise)

promise.then(function(result){
    console.log(a)
},
function(error){
    console.log(a)
})
*/

/*

function func1(){
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            const error = true //false
            if(!error){
                console.log("your promise has been resolved")
                resolve()
            }
            else{
                console.log("your promise is not resolved")
                reject("sorry not fullfilled")
            }

        },2000)
    })
}
 func1().then(function(){
     console.log("sahi ho daami!: thanks for resolving")
 }).catch(function(){
     console.log("hait vayen nih????: very bad bro")
 })
*/

/*
const promise1 =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("promise1 is completed")
    },2000)  
})

const promise2 =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("promise2 is completed")
    },2000)  
})
Promise.all([promise1,promise2]).then(function(data){console.log(data[0],data[1])}).catch(function(){
    console.log(error)
})
*/