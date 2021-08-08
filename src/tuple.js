// Tuple(튜플)
// 배열은 원소 수 제약을 걸 수 없지만, 튜플은 원소 수 제약을 걸 수 있다!
var address = [14023, '서울시', '송파구'];
var zipcode = address[0], address1 = address[1];
var BookData = [
    ['파리 대왕', '윌리엄 골딩', 1954],
    ['카라마조프가의 형제들', '표도르 도스토옙스키', 1879]
];
BookData.push(['ㄱ', 'ㄴ', 23]);
function getArrayOne() {
    return [14023, '서울시', '송파구'];
}
function getArrayTwo() {
    return [14023, '서울시', '송파구'];
}
var address2 = getArrayTwo()[2];
console.log(address2);
// address2 = 12;
