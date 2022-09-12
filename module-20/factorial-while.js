function factorial(num){
    let fact =1;
    let i =num;
    while(i >= 1){
        fact =fact * i;
        i--;
    }
    return fact;
}

const myNumber =7;
let factto =factorial(myNumber);
console.log(factto);