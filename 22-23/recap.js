function largestElemntOfArray(numbers){
    let max = numbers[0];
    for(let i=0;i<numbers.length;i++){
        const element =numbers[i];
        if(max < element){
            max =element;
        }
        console.log(element);
    }
    return max;
}

const arr =[2,4,53,43,6,24,56,23,44,55,27];
const maxFromArray=largestElemntOfArray(arr);
console.log('The largest number is' ,maxFromArray);

console.log("min");

function smallestElement(numbers){
    let min =numbers[0];
    for(let i=0; i<numbers.length; i++){
        const element =numbers[i];
        if(min >element){
            min=element;
        }
        console.log(element);
    }
    return min;
}

const minFromArray=smallestElement(arr);
console.log('The smallest element is',minFromArray);