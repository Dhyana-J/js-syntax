//Closure(클로저)
//클로저는 "보호되는 공간"이다. 특정 값을 외부접근을 차단해 보호하면서 사용할 수 있도록 해준다. 
//TS는 private이라는 접근제어자가 있지만, JS는 없다. 그래서 필요하다.


function increment(){
    let saveNumber = 1; // 이 변수가 closure라는 특별한 공간에 저장된다!
    return function(){  // 함수가 리턴되면서, 함수의 local space가 해제되며 saveNumber가 사라지지만, closure에 존재하는 saveNumber는 유지된다.
        return saveNumber++;
    }
}

const inc = increment(); //saveNumber 변수가 유지됨
console.log(inc()); 
console.log(inc());
console.log(inc());

console.log(increment()()); // saveNumber 변수가 계속 초기화됨
console.log(increment()());
console.log(increment()());