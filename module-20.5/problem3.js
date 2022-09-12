//৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function myGrading(score) {
    switch(true) {
      case (score > 100 || score < 0):
         console.log('Invalid Mark !!',score);
          break;
      case (score >= 80):
        console.log('You have got A+ and mark is',score);
           break;
      case (score >= 70):
        console.log('You have got A and mark is',score);
           break;
      case (score >= 60):
        console.log('You have got A- and mark is',score);
           break;
      case (score >= 50):
        console.log('You have got B and mark is',score);
          break;
      case (score >= 40):
        console.log('You have got C and mark is',score);
          break;
      case (score >= 33):
        console.log('You have got D and mark is',score);
          break;
      default:
        console.log('You have got F and mark is',score);
    }
  
    return 0;
  }
  
var myMark =88;
myGrading(myMark);

var myMark =480;
myGrading(myMark);

var myMark =-48;
myGrading(myMark);