// 타입가드
// 코드 흐름상 타입때문에 에러날 상황을 방지해주는 코드

interface Foo {
    foo:string;
    common:string;
}

function isFoo(arg:any):arg is Foo{
    return arg.foo!==undefined;
}

console.log(isFoo({foo:'Grazzie',common:'thanks'}));