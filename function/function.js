// // console.log("function in js")
// // function funName(name){
// //     console.log('iam in function ' +name)
// // }

// // let name1=funName('funny man')
// // let name='somone'
// // console.log(`my name is suman ${name} and ${5*5}`)

// // //function expression
// // name1()

// let fun1=function funName(name){
//         console.log('iam in function ' +name)
//     }
// fun1('me')
// fun1('we')

// // console.log()
// let name2=function(a,b){
//     sum=a+b
//     return sum
// }
// // let a=name2(9,2)
// // console.log(name2(9,2))


// // *args-> rest opereator (...)
// let name3=function(...a){
//   let i
//   let sum=0
//   for( i=0;i<4;i++){
//       sum=sum+a[i]
//   }
//   debugger;
//   return sum

// }
// console.log(name3(9,3,4,7))

let name1 = function(...a) {
    let i 
    let sum = 0
    let mul = 1
    for (i=0; i<5; i++){
        sum = sum + a[i]
        mul = mul* a[i]
        
    }
    console.log(sum)
    console.log(mul)
}

console.log(name1(1,2,3,4,5))

function mybio([firstname,lastname, others,model]){
    console.log(`my firstname is ${firstname} and lastname is ${lastname} and other are ${others}`)

}
ab=['susmita','lamichhane','dang','model']
mybio(ab)


function mybio(ab){
    
    console.log(ab)
    for( let i=0;i<4;i++){
        console.log(ab[i])
    }

}
ab=['susmita','lamichhane','dang','model']
mybio(ab)



