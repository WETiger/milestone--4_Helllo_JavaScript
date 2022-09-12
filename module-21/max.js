const business =300;
const minister =600;
const army = 2400;


// if(business>minister){
//     console.log('Business man r pula is bigger ');
// }else{
//     console.log('Minister man r pula is bigger');
// }


function twoLargest(num1,num2){
    if(num1 > num1){
        return num1;
    }
    return num2;

}

const largeFormTowNumber =twoLargest(business,minister);
console.log('largest is ',largeFormTowNumber);

/* if(business > minister && business >army){
    console.log('Business man is bigger');
}else if(minister > business && minister> army){
    console.log('Minister man is bigger');
}else{
    console.log('Army man is bigger');

} */

// const max =Math.max(business,minister,army);
// console.log('Largest number is',max);