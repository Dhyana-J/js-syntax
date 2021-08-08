// JS - 참조와 복사

// primitive data type (number, string, boolean, null, undefined)은 복사된다
// other data type (object) 는 참조된다 복사되지 않아서, 원본 객체의 속성을 변경시킬 수 있음
let a = 10;
let b = a;

let o = {
    isLoading:true
}

let w = o;

w.isLoading = false;

console.log('done');