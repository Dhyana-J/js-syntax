/*
    @ 대표적인 Web API 
    
    * Storage API : 브라우저측에서 브라우저 데이터를 저장하기 위한 용도의 저장소
        - local storage, session storage, DB
        - local session storage
            -> local : 스토리지 탭 열어서 삭제하지 않는 한 자바스크립트 코드로 clear하거나 remove하기 전에 삭제 안된다. 
            -> session : 브라우저 세션 기반으로 데이터를 유지한다. 브라우저 종료되면 날아간다.
            -> 둘 다 반드시 문자열 형태로 데이터 저장해야됨(JSON)
    
    * History API : 브라우저에서 사용자가 사이트를 이동한 내용을 기록하는 API
        - SPA 구현할 때 화면 전환 시 꼭 필요!

    * Clipboard API : 원클릭으로 url이나 공유해야할 정보들을 클립보드에 저장하는 기능 제공하는 API
    
    * Canvas API : 매우 광범위한 2D 그래픽 다루는 시스템
        - low level 시스템 
        - 픽셀단위의 그래픽 다룰 수 있다.
*/ 
