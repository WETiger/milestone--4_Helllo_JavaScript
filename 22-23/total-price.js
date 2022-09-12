const products =[
    {name:'laptop',price:100000},
    {name:'phone',price:50000},
    {name:'watch',price:5000},
    {name:'shirt',price:500},
    {name:'lungi',price:300},
    {name:'trimar',price:2000}
];

function totalPrice(product){
    let singleProduct =0;
    for(const item of product){
        singleProduct =singleProduct+item.price;
    }
    return singleProduct;
}

const priceTotal =totalPrice(products);
console.log(priceTotal);