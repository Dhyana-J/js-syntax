// function scope, block scope, hoisting
// JS에서 스코프는 가장 가까운 범위에서부터 찾는데, 프로토타입과 동작 매커니즘이 비슷하다.
// 호이스팅? -> 코드 실행 전 코드를 스캔해서 함수나 변수를 미리 만들어두고 코드를 실행하는 것
// 함수의 호이스팅은 선언문으로만 가능 웬만하면 호이스팅 발생하지 않도록 호출 이전에 코드를 써두자.


let name = 'lee';

function foo(){
    let x = 10;

}

foo();
