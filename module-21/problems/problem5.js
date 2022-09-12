//৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

function secondLargestNumberFromArray(numbers){
    let second =numbers[0];
    numbers.sort();
    numbers.pop();
    for(let i=0;i<numbers.length;i++){
        const element =numbers[i];
        if(second < element){
            second=element;
        }
    }
    return second;
}


const nums=[45,78,62,21,25,65];
const secondNum=secondLargestNumberFromArray(nums);
console.log('The second largest in array is',secondNum);