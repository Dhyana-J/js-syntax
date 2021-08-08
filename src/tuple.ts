// Tuple(튜플)
// 배열은 원소 수 제약을 걸 수 없지만, 튜플은 원소 수 제약을 걸 수 있다!
// 다양하게 사용할 수 있으므로, 적절한 방법을 직접 해보면서 연구 필요

const address:[number,string,string] = [14023,'서울시','송파구'];

let [zipcode,address1] = address

// zipcode='12345'; tuple 구조분해 한 경우 자동으로 자료형 제약 걸어준다.


type BookInfo = [string,string,number];

const BookData:BookInfo[] = [
    ['파리 대왕','윌리엄 골딩',1954],
    ['카라마조프가의 형제들','표도르 도스토옙스키',1879]
];

BookData.push(['ㄱ','ㄴ',23]);

function getArrayOne():any[]{
    return [14023,'서울시','송파구'];
}

type Address = [number,string,string]

function getArrayTwo():Address{
    return [14023,'서울시','송파구'];
}

let address2 = getArrayTwo()[2];

console.log(address2);
// address2 = 12;