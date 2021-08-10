// 동기와 비동기

// 동기 : 앞의 코드가 실행되기 전에 다음 코드가 실행될 수 없는 것
// 비동기를 해결하는 방법 : 콜백으로 비동기 상황을 동기적으로 엮어줄 수 있다

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject('err1'); // catch가 받는다.
        resolve('first ok'); // then이 받는다.
    },2000)
})

p
.then((result)=>{
    console.log(result)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve('second ok');
            reject('err2');
        },2000)
    })
})
.then((result)=>{
    console.log(result);
})
.catch((e)=>{
    console.log(e)
});


function double(x){
    return x*2;
}

function calcValue(a,b,cb){
    setTimeout(()=>{
        cb(a+b);
    },100);
}

const x = double(2);
const y = x;

console.log(y);

const r = calcValue(1,2,(result)=>{
    console.log(result)
});

const z = r;
console.log(z);