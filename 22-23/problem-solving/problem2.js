//২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 
//1 2 3 5 7 11 

function primeNumber(number){
    let isPrime =true;
    if(number == 1){
        console.log(number,' is not prime number !');
    }else if(number > 1){
        for(let i=2;i<number;i++){
            if(number % i ==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(number ,'is a prime');
        }else{
            console.log(number ,'is not a prime');
        }
    }else{
        console.log( "The number is not a prime number.");
    }
}

const num =13;
const prime=primeNumber(num);