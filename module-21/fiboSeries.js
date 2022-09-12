function fiboSeries(num){
    const fibo =[0,1];
    if(typeof num != 'number' ){
        return 'Please give a number !!!';
    }
    if(num < 2){
        return "Please enter a positive number gather than 1 !";
    }
    for(let i= 2; i<=num; i++){
        fibo[i] = fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

const nth = 3;
const fibonacci =fiboSeries(nth);
console.log(fibonacci);