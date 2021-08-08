// JS - 속성과 메소드

const obj = {
    getOne : function(){
        return 1;
    },
    getTwo(){
        return 2;
    },
    getThree:()=>3,
}

//아래와같은 바닐라 JS 코드를 타입스크립트로 간단하게 구현할 수 있다.
//물론, JS에서 타입제약은 불가. 적은 제약만 가능함
const myObj = Object.create(null,{
    name : {
        value:"junho lee",
        writable:true, // false로 하면 readonly와 같음
        configurable:false // false로 하면 속성 추가 제거 불가
    }
});

myObj.name = 'hello';
delete myObj.name;
console.log(myObj.name);