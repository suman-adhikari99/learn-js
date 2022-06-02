console.log("objet in js")

a=['susmita','lamichhane']
let empty ={}
let person ={
    firstName:"susmita",
    lastName:"something",
    print:function(){
        console.log("this.firstName+this.lastName")
    }
   
}

console.log(a[0])
// console.log(person['firstName'])
console.log(person.firstName)
console.log(person.lastName)
person.print()


person.firstName='suman'
console.log(person.firstName)

person.age=23
console.log(person.age)
console.log(person)
