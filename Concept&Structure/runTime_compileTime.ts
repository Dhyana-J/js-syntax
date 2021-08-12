/*
    JS는 런타임과 컴파일 타임 개념이 없음. 런타임과 코드 에디터 상황이 똑같음
    TS는 런타임 컴파일 타임이 명확하게 구분되어있다.

    TS는 구조적 한계로 모든 문제를 커버할 수는 없다.
    ex) 외부 데이터를 받아오는 경우 런타임에 아래와 같은 문제 발생 여지가 있음
*/

function add(x:number,y:number):number{
    return x+y;
}

type ObjType = {
    x:number;
    y:number;
}


const json = `{
    "x":"abc",
    "y":20
}`; 

const obj:ObjType = JSON.parse(json) as ObjType; 

add(obj.x,obj.y); // json 객체에 따라 문자열이 넘어갈 수 있음..!
