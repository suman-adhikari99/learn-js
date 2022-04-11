//function returning function
// js ma j pani retrun garn milx like array, obj,num, func etc



const bachhe = ['chintu','pintu','mintu']
const mrNames=[]
for (let i=0;i<bachhe.length; i++){
    mrNames.push(`Mr ${bachhe[i]}`)
}
console.log(bachhe)
console.log(mrNames)



const mrNameseach=bachhe.forEach((x)=>"MR"+ x);
console.log(mrNameseach)  //->undefined

const mrNamemap=bachhe.map((x)=>"MR"+ x);
console.log(mrNamemap)  //->return new array

//use for each 
function myfunction(){
    function hello(){
        return "hello world"
    }
    return hello;
}
// const ans=myfunction()
// console.log(ans())


// yedi function ma function as argument pass garirako xa 
// or function as parameter pass gaerirako xa
// or function bata function return garirako xa 
// ya 3 otai kaam ekai choti garirako xa vane 
// teslae higer order function vaninx



numbers=[4,2,5,8,10]
numbers.forEach((element,index) => {
    // console.log(`index is ${index} and number is ${element} \t ${index}*${element}=${index*element}`)
    
});

// without for each multiply by 2
 function mul2(number){
     return number*2
 }

 for (let i=0;i<numbers.length;i++){
    //  console.log(mul2(numbers[i]))
 }


//  by using foreach
numbers.forEach(function(number,index){
    console.log(number*2);
}
)
// console.log(numbers)

// difference between map and foreach:https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/