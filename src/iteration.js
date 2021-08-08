// JS - 반복문
// for, while, do-while, for-of(배열순회), for-in(객체의 키값 또는 배열의 index 꺼내올 때 주로 쓴다)

const arr = ['a','b','c','d'];
const obj = {
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5
}

console.log('=== array for of ===');
for(const element of arr){
    console.log(element);
}
console.log('=== array for in ===');
for(const index in arr){
    console.log(arr[index]);
}
console.log('=== object for in ===');

for(const key in obj){
    console.log(key);
    console.log(obj[key]);
}

console.log('Grrrazzie!');

