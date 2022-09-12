function minElementFromArray(numbers){
    let min = numbers[0];
    for( let i = 0; i <numbers.length;i++){
        const element = numbers [i];
        if(min > element){
            min = element;
        }
        console.log(element);
    }
    return min;
}
const ages =[54,43,64,34,63,22,34,74,87];
const minFromArray =minElementFromArray(ages);
console.log('The min element of Array is ',minFromArray);