
// const items = [1,2,3,4,5,6,7]

// let result = items.reduce((acc,cur)=>cur%2==0 ? acc+cur*4 : acc,0)
// let result2 = items.filter(v=>v%2==0).map(v=>v*4).reduce((acc,cur)=>acc+cur,0)
// console.log(result)
// console.log(result2)

// console.log('what')

// const it = [1,2,3,1,4,2]
// const after = new Set(it) // set자료구조는 중복을 허용하지 않는다. 기존 배열에서 중복제거할 때 용이함

// console.log([...after])



function test(...a){
    console.log(a)
}

test([1,2,3,4])
