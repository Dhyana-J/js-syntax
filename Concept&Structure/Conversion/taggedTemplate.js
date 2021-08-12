
const userName = "Lee jh";
const bolder = text=>`<b>${userName}</b>`;

console.log(`Hello ${bolder(userName)}`)


function div(strings,...fns){
    const flat = s => s.split('\n').join('');
    return function(props){
        //                                      *fns[0] 함수가 있으면 실행해라
        return `<div style="${flat(strings[0])+(fns[0]&&fns[0](props))+flat(strings[1])}"></div>`;
    }
}

// Tagged Template
// ex) div``은 함수임. 템플릿 리터럴에 정의된 문자열 배열(strings)과 함수(fns)를 인자로 받는다.
// strings 배열은 ${}를 기준으로 쪼개진다. 문자열.split('${}')같은 느낌
const Div = div`
    font-size: 20px;
    color: ${props=>props.active?'white':'gray'};
    border: none;
`;

console.log(Div({active:true}));