console.log();
(function(name){
console.log("who "+name);
})('susmita');

// wap function to print 5'*' and call it atutomatically
// -> *****


// (function(name){
//     console.log();
//     })(5);


// (function(num){
//     for(let i =1 ; i<=num; i++){
//         console.log("*");
//     }
// })(6);

for(let i=2; i<10;i=i++){


    // if (i==4){ }
    console.log(`multiply of ${i}`)
    for (let j=1; j<=10;j++){
        if (j==4){ 
            continue
        }
       
        console.log(`${i}*${j}=${i*j}`)


    }

}



for(let i=2; i<10;i=i+2){
    console.log(`multiply of ${i}`)
    if (i==4){
        break
    }
    for (let j=1; j<=10;j++){
        if (i==4){
            break
        }
        console.log(`${i}*${j}=${i*j}`)


    }
}


