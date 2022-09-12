
function isEven(number){
    if(number % 2 ==0){
        return true;
    }
    return false;
}

const myNumber =12343 ;
const isMyNumberEven =isEven(myNumber);
console.log("is my number Even :",isMyNumberEven);

const herNumber =45324 ;
const isHerNumberEven =isEven(herNumber);
console.log('is her number Even :',isHerNumberEven);


function isOdd(number){
    if(number%2 !=0){
        return true;
    }
    return false;
}

const myNumbers =534;
const isMyNumberOdd =isOdd(myNumbers);
console.log("Is my numebr Odd :",isMyNumberOdd);

const herNumbers =5545;
const isHerNumberOdd =isOdd(herNumbers);
console.log("Is her number Odd :",isHerNumberOdd);