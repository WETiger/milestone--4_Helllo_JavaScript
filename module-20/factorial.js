
// function factorial(number){
//     let fact =1;
//     for(let i = 1; i <=number; i++){
//          fact = fact * i;
//     }
//     return fact;
// }
// let num =10;
// let facts =factorial(num);
// console.log(facts);

function factorial(number){
    let fact =1;
    for(let i=1;i<=number;i++){
        fact=fact*i;
    }
    return fact;
}

let myNumber =7 ;
let factto =factorial(myNumber);
console.log("Factorial 7 is :",factto);