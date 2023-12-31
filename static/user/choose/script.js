// 두개 콘텐츠 이미지를 겹치게 하여 클릭 시 한 화면씩 보이게 하기
var tab = document.querySelectorAll(".tab-btn");
var click = true;
var count = 0;

function handleClick(element) {
    var btnTarget = element.currentTarget;
    var eggImg = btnTarget.querySelector("img.egg");
    var posterImg = btnTarget.querySelector("img.poster");
    var disinput = btnTarget.querySelector("input.choose");
    var overinput = btnTarget.querySelector("input.overview");
    var titleinput = btnTarget.querySelector("input.titleview");

    if (btnTarget.dataset.value == 1){
        // 계란 이미지가 보이는 경우
        eggImg.style.display = 'none';  // 계란 이미지를 보이지 않게 함
        posterImg.style.display = 'inline';  // 포스터를 보이게 함
        btnTarget.setAttribute('data-value', '0');  // 스위칭 할 수 있도록 커스텀 속성 값을 변경
        posterImg.style = 'filter:brightness(1)';

        disinput.disabled = true;
        overinput.disabled = true;
        titleinput.disabled = true;

    } else{
        // 계란 이미지가 보이지 않는 경우
        eggImg.style.display = 'flex';  // 계란 이미지를 보이게 함
        // posterImg.style.display = 'none';  // 포스터를 안보이게 함
        btnTarget.setAttribute('data-value', '1');  // 스위칭할 수 있도록 커스텀 속성 값을 변경
        posterImg.style = 'filter:brightness(0.5)';

        disinput.disabled = false;
        overinput.disabled = false;
        titleinput.disabled = false;
    }

}

// for(초깃값;조건식;증감식){js 코드}
for (var i=0; i< tab.length; i++) {
    tab[i].addEventListener("click", handleClick);
}


function getCheckedCnt()  {
    // 선택된 목록 가져오기 (const->var)
    var query = 'input[name="contents"]:checked';
    var selectedElements = 
        document.querySelectorAll(query);
    
    // 선택된 목록의 갯수 세기
    var selectedElementsCnt =
            selectedElements.length;

    // 출력
    document.getElementById('result').value
        = selectedElementsCnt+"개 선택하였습니다.";
    
    let three = document.getElementById('result');
    if (selectedElementsCnt > 2) {
        three.disabled = false;
        three.style = 'background-image: linear-gradient(to right, #ff750f 0%, #ffb105 51%, #ffcc00 100%); cursor:pointer';

    } else {
        three.disabled = true;
        three.style = 'background-image: linear-gradient(to right, #717171a2 0%, #717171a2 51%, #717171a2 100%); cursor:default'
    }

}

function loading() {
    var newImage = document.getElementById("loader");
    var xnav = document.getElementById("nav");

    newImage.style = 'display: block;';
    xnav.style = 'display: none;';
}