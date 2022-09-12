//২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function fahreheitToCelcious(fahreheit){
    const celcius = (fahreheit-32)*(5/9);
    return celcius;
}

const fahre =113;
const cel = fahreheitToCelcious(fahre);
console.log(cel);