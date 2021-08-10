/*
 객체는 JS를 실행하는 시간에 메모리상에만 존재하기 때문에, 데이터로 주고 받기가 어렵다.

 데이터로써 주고받는다? -> 서버로부터 데이터를 받거나, 웹앱과 서버간에 데이터를 주고받거나, 로컬 스토리지나 세션스토리지 또는 DB에 데이터를 저장한다거나,
 이럴 때 객체 자체를 주고받을 수 없기 때문에 무언가 방법이 필요하다

 해결책으로 나온 것이 JSON 포멧!

 key, 문자열은 반드시 double quote (") 로 감싸줘야함. JSON은 더블쿼트만 지원.
 테일콤마 (마지막 속성 뒤 콤마) 지원 안함. 오류나니까 지워주자
 문자열, 숫자, 배열, 객체, boolean null타입만 지원한다.
 JSON은 함수를 지원하지 않는다.
*/

const jsonString = `
    {
        "name":"junho lee",
        "age" : 25,
        "bloodType" : "A",
    }
`;

//JSON.parse할 때 JSON 구문에 오류가 있는 경우 프로그램이 종료된다.
//이는 try-catch문으로 잡을 수 있다.
try{
    const myJson = JSON.parse(jsonString);
    console.log(myJson);
    console.log(JSON.stringify(myJson));
    console.log(jsonString);
}catch(e){
    console.log('다시 한번 시도해 주세요',e)
}



