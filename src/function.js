// 함수
(function(){
    console.log("즉시 실행 함수 실행");
})();

const myFn = function(){
    return 100;
}

//이렇게 arguments를 사용하면, 가변인자를 처리하는 소스코드를 다 읽어봐야 알 수 있다.
//함수의 시그니처를 보고 함수가 어떤 일을 하는지 최대한 파악할 수 있게끔 하는 것이 필요하다.
// function sum(){
//     let s = 0;

//     for(const value of arguments){
//         s+=value;
//     }

//     return s;
// }

//위 함수를 아래와 같이 바꾸면, 그냥 겉에서 함수를 보고도 무슨 일을 하는지 알기 쉽다. 
function sum(a,b,...args){
    let total = a+b+args.reduce((acc,cur)=>acc+cur,0)
    return total
}

console.log(sum(1,2,3,2,1));


//함수 호출 세 가지 방법
const arr = [10,20,30];
sum();
sum.call(null,10,20,30);
sum.apply(null,arr); // apply는 외부로부터 array만 전달받으면 인자로 쓸 수 있어서 다양한 응용이 가능하다.


//함수 표현식과 함수 선언문의 차이가 뭘까? 
//arrow function은 context나 prototype을 학습하게 되면 존재 이유를 알 수 있다.

const ten = (x)=>100 + x;

ten(10);

// 생성기 함수 (generator)
// 함수 실행 도중 함수 바깥에 나갔다 들어왔다 할 수 있는 함수.. 추후 좀 더 자세히 알아보자
function* gen(){
    yield 10;
    yield 20;
    return 30;
}

const g = gen();
g.next();
g.next();
g.next();


// 비동기 함수
async function myTask(){

}