// generic : 타입을 호출 순간에 확정해서, 그 뒤로 확정되는 타이핑의 범위를 확대함으로써 TS의 장점을 누릴 수 있는 스펙
// <T>

type User = {
    name:string;
    age:number;
}


const pipeObject = <T>(obj:T):T=>{
    return obj;
}

pipeObject<User>({name:'j',age:25});
// pipeObject<User>({name:11,age:25});
// pipeObject<User>({name:'h',age:'hello'});