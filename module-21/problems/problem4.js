//৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function rectangularArea(length,height){
    const area = length * height;
    return area;
}

const len =5 ;
const hei =7;
const RecArea =rectangularArea(len,hei);
console.log(RecArea);