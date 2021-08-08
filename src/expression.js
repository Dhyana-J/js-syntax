/* 
    JS에서 
    
    expression = value

    아무리 복잡한 expression(식)이라도 결국 값(value)로 수렴한다.

    값으로 환원되지 않는 코드는 statement(문)이라고 한다.
*/


const colors = ['red','green','blue'];

const Colors = {
    white:'white',
    red:'red',
    green:'green'
};

// 구조분해 할당은 ES6 문법이다. 
const [,,blue] = colors; //destructuring할 때 배열은 순서를 기준으로 value에 접근하기 때문에, 공백과 심표로 값을 건너 뛰어 원하는 값에 접근할 수 있다.
const {red} = Colors; //destructuring할 때 객체는 key값으로 value에 접근이 가능하다. 

console.log(blue);
console.log(red);


//이렇게 함수를 괄호로 묶으면, statement가 아니라 value로 인지할 수 있게끔 할 수 있다.
//값이 아닌 것을 괄호로 감싸서 임의로 값으로 만들 수 있다는 장점이 있다. 모든 statement에 적용되는건 아님. 맥락에 따라 다름
(function foo(){

})