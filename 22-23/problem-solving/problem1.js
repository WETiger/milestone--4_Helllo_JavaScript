///১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  

function triangleCalculator(length1,length2,length3){
    const s =(length1 +length2+length3)/2;
    const area =Math.sqrt(s*(s-length1)*(s-length2)*(s-length3));
    return area;
}

const a =5;
const b =6;
const c =7;
const triangleArea = triangleCalculator(a,b,c);
console.log(triangleArea);