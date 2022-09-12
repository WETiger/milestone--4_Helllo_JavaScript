const products=[
    {name:'laptop', price:80000, quantity:1 },
    {name:'phone', price:28000, quantity:2 },
    {name:'shirt', price:500, quantity:5 },
    {name:'watch', price:3000, quantity:3 },
    {name:'pant', price:1000, quantity:4 },
];

function cart(items){
    let cartTotal=0; 
    for(const item of items){
        const itemTotal =item.price *item.quantity;
        cartTotal =cartTotal + itemTotal;
    }
    return cartTotal;
}

const cartPrice =cart(products);
console.log(cartPrice);