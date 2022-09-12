////namta print program /////একটা ফাংশন লিখবা যেটা ১৩ এর ////নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
function namtaOf13(number){
    var i=1;
    while(i<=10){
        var namta = i *number ;
        console.log(i ,"*",number,namta);
        i++;
    }

    return namta;
}

namtaOf13(13);

// namtaOf13(17);