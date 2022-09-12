function lowestElementFromArray(numbers){
    let lowest = numbers[0];
    for(let i=0; i < numbers.length; i++){
        const element =numbers[i];
        if(lowest > element){
            lowest =element;
        }
        console.log(element);
    }
    return lowest;
}

const ages =[34,4,23,54,566,98,21,56,32];
const lowserAge =lowestElementFromArray(ages);
console.log('The age of child in the array is',lowserAge);