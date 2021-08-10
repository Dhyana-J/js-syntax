// 이벤트 루프? -> Youtube에 Phillip Roberts의 이벤트 루프는 무엇입니까? 한번 더 보자.
// Call Stack, Task Queue(Callback, Render) 
// 콜스택이 최우선, 콜스택이 비면 event loop가 테스크 큐의 작업을 콜스택으로 올림
console.log('hi'); //1. call stack 

setTimeout(()=>{  //비동기 코드 task queue에 들어감 
    console.log('aaaaaaa'); //3. call stack
},0)

console.log('bbbbbb'); //2. call stack