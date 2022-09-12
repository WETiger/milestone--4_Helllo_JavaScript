function largestElements(numbers){
    let largest =numbers[0];
    for(let i=0; i < numbers.length;i++){
        const element =numbers[i]
        if(largest < element){
            largest = element;
        }
        console.log(element);
    }
    return largest;
}




const arrayNumbers =[-7,-99,-66,-63,24,-8];
// const arrayNumbers =[25,400,58,6,5,87,99,66,63,24,8];
const large=largestElements(arrayNumbers);
console.log('The large number is',large,'of Array');