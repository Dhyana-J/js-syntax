var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var books = [
    '허클베리 핀의 모험',
    'karma',
    '톰소여의 모험',
    '카라마조프가의 형제들'
];
var bookObjs = books.map(function (book) {
    return {
        title: book,
        author: undefined
    };
});
bookObjs.forEach(function (v) {
    console.log(v);
});
var booksWithAuthor = books
    .map(function (book) { return ({
    title: book
}); })
    .map(function (book) { return (__assign(__assign({}, book), { author: 'Mark Twain' })); });
var bookTitleToBookObject = function (book) { return ({ title: book }); };
var makeAuthor = function (name) { return function (book) { return (__assign(__assign({}, book), { author: name })); }; };
var shakespearTwoBooks = books
    .map(bookTitleToBookObject)
    .map(makeAuthor('William Shakespare'));
console.log(shakespearTwoBooks);
