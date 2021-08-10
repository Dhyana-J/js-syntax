// @types : 자체적으로 타입스크립트에 타이핑되어있지 않은 라이브러리들을 모아놓은 패키지 저장소. 설치하면 타이핑규격이 들어가서 빨간줄 사라짐
// TS에서 타입 추론을 할 수 있게끔 도와준다고 보면 된다.


import {v4} from 'uuid';

type uniqObject = {
    id:string;
    [key:string]:string|number|boolean;
}

const makeObject = ():uniqObject=>({id:v4()})

console.log(makeObject())
console.log(makeObject())