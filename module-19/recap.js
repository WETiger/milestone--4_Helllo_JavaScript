var favoriteBook = 'The Miracal Morning';

// array 
var books =['Bangla','Physics','Math','Chemistry'];

var book =books.indexOf('biology');
var book0 =books.indexOf('Bangla');
console.log(book);
console.log(book0);

books[1] = 'story brand';

books.push('small giants')

// conditions 

if(books[1] =="story brand"){
    console.log('i m story brand book');
}else{
    console.log('i m not story brand book');
}

// loop 
// var n = prompt("Enter the last number :");
var i = 0 ;

while (i <= 15){
    console.log('hello'+i);
    i++;
}

for (var x = 1; x <= 40 ; x+=2){
    console.log(x);
}