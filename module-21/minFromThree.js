function minFromThreeNumbers(num1,num2,num3){
    switch(true){
        case (num1<num2 && num1<num3):
            return num1;
            break;
        case (num2<num1 && num2<num3):
            return num2;
            break;
        default:
            return num3;
    }
}
const a= 65;
const b=664;
const c=564;
const minFormThree=minFromThreeNumbers(a,b,c);
console.log('The min number is',minFormThree);