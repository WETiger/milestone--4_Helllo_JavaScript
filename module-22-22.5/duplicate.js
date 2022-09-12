const numbers =[2,3,5,6,78,97,7,6,5,4,3,2,1,2,3,4,5,6,7,8,6,5,4,4,3,4,3,5,6,4,3,2,77];

function removeDuplicateElement(nums){
    const newArr =[];
    for (const element of nums){
        if(newArr.indexOf(element)==-1){
            newArr.push(element);
        }
    }
    return newArr;
}

const newArray =removeDuplicateElement(numbers);
console.log(newArray);