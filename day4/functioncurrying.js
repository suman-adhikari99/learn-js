let multiply=function(x,y){
    console.log(x*y)
}
let multiplyByTwo=multiply.bind(this,2)
multiplyByTwo(2)

let anotherExmp=multiply.bind(this,4)
anotherExmp(6)


const addpartial=(x,y,z)=>{
    return x+y+z
}
var partialFunc=addpartial.bind(this,2,3)
console.log(partialFunc(5))

//or
let partialFunc1=addpartial.bind(this,2,3,5)
console.log(partialFunc1())
