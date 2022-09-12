function minNumberFromThree(num1,num2,num3){
    switch(true){
        case (num1 < num2 && num1 <num3):
            return num1;
        case (num2 < num1 && num2 <num3):
            return num2;
        default :
            return num3; 
    }
}
 
const a =54 , b=3, c=34;
const min =minNumberFromThree(a,b,c);
console.log('The min number is ',min);