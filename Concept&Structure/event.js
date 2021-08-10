// Bubbling -> 안쪽 요소에서 이벤트가 발생했을 때, 이벤트가 바깥쪽으로 확산되어 나가는 것을 버블링이라고 한다. 이벤트가 하위 요소로 전파. 
                // on<event> 또는 addEventListener로 잡아낼 수 있다.
// Capturing -> 버블링의 반대. 이벤트가 상위 요소로 전파
                // addEventListener의 Capture 옵션을 true로 설정해야만 잡아낼 수 있음
// Target -> 이벤트가 실제 타깃 요소에 전달되는 단계
// 버블링은 탄산수, 캡처링은 러시아인형이라고 생각하면 된다.
// 캡처링은 거의 안쓰인다. 법원 판결이 지방법원에서부터 이루어지는 것이 더 효율적인 것과 같은 원리

function main(){
    const BUBBLING_PHASE = false;
    const CAPTURING_PHASE = true;
    const PHASE_NAME = ['NONE','CAPTURING','TARGET','BUBBLING'];

    function eventLogger({target,currentTarget,eventPhase}){
        console.log(`${target.dataset.name},${curentTaget.dataset.name},${PHASE_NAME[eventPhase]}`);
    }

    let divs = document.querySelectorAll('div');
    divs.forEach(div=>div.addEventListener('click',eventLogger,BUBBLING_PHASE));
}

document.addEventListener('DOMContentLoaded',main);

