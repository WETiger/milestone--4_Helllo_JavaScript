//১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

function celciusToFahreheit(celcius){
    const fahreheit = celcius *(9/5)+32;
    

    return fahreheit;
}
const cel = 45;
const itFahreheit =celciusToFahreheit(cel);
console.log(cel,'celcius convert into',itFahreheit);