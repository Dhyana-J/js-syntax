
const cartItems = [
    {id:1,item:'핸드밀',price:40000,discount:0,},
    {id:2,item:'A4용지',price:4000,discount:0,},
    {id:3,item:'수영복',price:120000,discount:0,},
    {id:4,item:'색연필72색',price:15000,discount:0,},
];

const cartItemsArray = []; //[[...row],[...row],[...row],...]


for (const item of cartItems){
    const row = []; // [value,value,value,...]
    for(const [,value] of Object.entries(item)){ //Object.entries({key,value}) => [key,value]
        row.push(value)
    }
    cartItemsArray.push(row.join())
}

console.log(cartItemsArray.join('==='));

const extractValueInObj = obj => Object
    .entries(obj)
    .map(([,value])=>String(value));

// console.log(Object.entries(cartItems[0]).map(([,value])=>String(value)))

const cartItemString = cartItems
    .map(extractValueInObj)
    .join('===');

console.log(cartItemString);
