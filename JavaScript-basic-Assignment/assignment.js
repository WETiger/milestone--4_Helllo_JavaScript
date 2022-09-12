///১. [ ফাংশন নেম দিতে হবে anaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 

function anaToVori(ana){
    const vori = 0.0625 *ana;
    return vori;
}

const anaDen=33;
const vori =anaToVori(anaDen);
console.log(anaDen,'ana converts to',vori,'vori');

/* 
// ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 
১ টি সিঙ্গারা এর দাম – ৭ টাকা
১ টি সমুচা এর দাম – ১০ টাকা 
১ টি জিলাপি এর দাম – ১৫ টাকা 
এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 
 */

function pandaCost(singra,samucha,jilapi){
    const singraPrice = 7 *singra;
    const samuchaPrice= 10*samucha;
    const jilapiPrice = 15*jilapi;
    const totalOrderCost=singraPrice+samuchaPrice+jilapiPrice;

    return totalOrderCost;
}

const giveSingr=10;
const giveSamucha=10;
const giveJilapi =10;

const totalTaka=pandaCost(giveSingr,giveSamucha,giveJilapi);
console.log('Total is ',totalTaka);

/* 

৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 
যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 
যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 

আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  

এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 
 */

function picnicBudget(numbers){
    if(numbers <=100){
        const personWithin100= 5000 *numbers;
        return personWithin100;
    }else if(numbers <=200){
        const first100Person = 5000*100;
        const over100 = numbers - 100;
        const second100Person =4000 *over100 ;
        const personWithin200 =first100Person +second100Person;
        return personWithin200;
    }else{
        const first100Person = 5000*100;
        const second100Person =4000 *100;
        const over200 = numbers -200;
        const three100Person = 3000 *over200;
        const personOver200 =first100Person +second100Person+three100Person;
        return personOver200;
    }
}

const numberOfperson =20;
const TotalPicnicBudget=picnicBudget(numberOfperson);
console.log('Total budget need ',TotalPicnicBudget);

//4. function addFriend

function addFriend(names){
    for(singleName of names){
        if(singleName.length % 2 != 0){
            break;
        }else{
            singleName='Here has no odd friend';
        }
    }
    return singleName;
}

const friedName =['arif','shamim','jihad ','jony','shakib','alo'];
const oddlenghtName =addFriend(friedName);
console.log(oddlenghtName);