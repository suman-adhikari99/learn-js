// console.log("array is started")

var fruits =["hawa","apple","banan",120,[12,45]]
// var num={
//     one:1,
//     two:2
// }
// console.log(fruits)
// console.log(num['one'])
// console.log(fruits[0])
// fruits[0]="mango"
// num['one']='not one'
// console.log(num['one'])
// console.log(fruits[0])
// console.log(fruits.length)

// traversal of an array
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// for in=> it gives index
for (let el in fruits){
    console.log(fruits[el])
}
//  var (let const)
// for (var el of fruits){
//     console.log(el)
// }

//for each

fruits.forEach(function(element,index,array){
    console.log(element +" "+index+" "+array)
})

let a=[1,2,3,4]
// a=[2,4,6,8]
