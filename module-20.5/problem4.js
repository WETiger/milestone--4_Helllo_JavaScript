//৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

function lav(sellPrice,costPrice){
    const profit = sellPrice -costPrice;
    return profit;

}

const sellingPrice =500;
const costingPrice =350;

const myProfit =lav(sellingPrice,costingPrice);
console.log('My profit is ',myProfit,'Tk' );