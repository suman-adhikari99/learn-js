// console.log('callback js')
// console.log('start')
// function getName(name){
//     setTimeout(()=>{
//         console.log('inside setTimeout')
//         return name
//     },2000)
// }

// const nm=getName('suman')
// console.log(nm)
// console.log('end')





// solution
function getName(name,callback){
    setTimeout(()=>{
        console.log("inside setTimeout")
        callback(name)
    },2000)
}

const nm1=getName('suman',(nm)=>{console.log(nm)})
console.log('end')

