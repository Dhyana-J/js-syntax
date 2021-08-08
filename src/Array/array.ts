
type Book = {
    title:string;
    copyright?:string;
    author?:string
};

const books:string[] = [
    '허클베리 핀의 모험',
    'karma',
    '톰소여의 모험',
    '카라마조프가의 형제들'
];


const bookObjs:Book[] = books.map((book:string)=>{
    return {
        title:book,
        author:undefined
    }
})

bookObjs.forEach((v:Book)=>{
    console.log(v)
})

const booksWithAuthor:Book[] = books
.map((book:string)=>({
        title:book
}))
.map((book:Book)=>({...book,author:'Mark Twain'}));

const bookTitleToBookObject = (book:string)=>({title:book})
const makeAuthor = (name:string)=>(book:Book)=>({
    ...book,
    author:name
})

const shakespearTwoBooks: Book[] = books
    .map(bookTitleToBookObject)
    .map(makeAuthor('William Shakespare'));

console.log(shakespearTwoBooks) 


// 아래 두 함수는 같다. 하지만 두 번째 함수가 함수만 보고도 인자를 넘겨야하는지 알 수 있도록 되어있으므로 이렇게 작성하자.
function sumNumbers():number{
    return Array.from(arguments).reduce((a:number,b:number)=>a+b,0);
}

//인자로 들어오는 ...args는 배열이다.
function sumNumbersForTypescript(...args:number[]):number{
    return args.reduce((a:number,b:number)=>a+b,0);
}

