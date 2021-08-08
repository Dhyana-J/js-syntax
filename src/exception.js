//JS - 예외처리

/* 
    * try catch문 특성상 depth 상관 없이 예외를 던진 함수 바깥에서 catch만 해주면 예외를 처리할 수 있다
    * catch 안해주면 프로그램 종료
*/

function doException(){
    throw new Error('whoa Error!');
}

function noException(){
    return true;
}

function callException(type){
    if(type === 'do'){
        doException();
    }else{
        noException();
    }
}

function main(){
    try{
        callException('do');
    }catch(e){
        console.log('예외 발생!');
        console.log(e);
    }finally{ //예외 나든 안나든 무조건 마지막으로 실행되는 코드 블록
        console.log('done');
    }  
}

main();