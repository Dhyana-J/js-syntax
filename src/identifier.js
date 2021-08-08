
// 문법 - 식별자(identifier)

const UPPER = 10; //상수는 알아보기 쉽게 대문자로 작성하자는 컨벤션이 있음.

const o = {
    age:10,
    name:'hello',
    ['na m e']:'hi'
};

console.log(o.name);
console.log(o["na m e"]); //이런식으로도 접근이 가능하다. string을 식별자화 할 수 있음.