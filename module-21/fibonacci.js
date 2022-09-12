/// 0 1 1 2 3 5 8 13 21 34 55 89
//4th =3rd + 2nd
//7th =6th +5th
//nth =(n-1)th + (n-2)th;


// let fibo =[0,1];
// for(let i=2; i<=11;i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo); 


function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'Please give a number ';
    }
    if(num < 2){
        return 'Please enter a positive number gather then 1 !'
    }
    const fibo=[0,1];
    for(let i =2 ; i<= num; i++){
        fibo[i]= fibo[i-1] + fibo[i-2];
    }
    return fibo;

} 
const nth =5;
const fibonacci=fibonacciSeries(nth);
console.log(fibonacci);



/* 
let fibo =[0,1];
for(let i=2; i <=15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2] ;
}
console.log(fibo);
 */