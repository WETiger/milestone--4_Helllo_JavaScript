function maxFromThree(num1,num2,num3){
    switch(true){
        case (num1 > num2 && num1>num3):
            return num1;
            break;
        case (num2 > num1 && num2 >num3):
            return num2;
            break;
        default:
            return num3;
    }
}

const a =50;
const b=6;
const c=20;

const largest =maxFromThree(a,b,c);
console.log('The largest number is',largest);