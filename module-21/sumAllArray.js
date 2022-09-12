const numbers=[42,54,24,1,5,26,32,56];

// let sum =0;
// for(let i=0; i< numbers.length; i++){
//     sum =sum +numbers[i];
// }
// console.log(sum);

function arraySum(num){
    let sum =0;
    for(let i=0; i < num.length;i++){
        sum =sum + num[i];
    }
    return sum;
}

const total = arraySum(numbers);
console.log(total);