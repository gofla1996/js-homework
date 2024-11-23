/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector('.nav');



// is-active 클래스 추가 함수
function addActiveClass(e){
  // 현재 선택된 캐릭터의 li 요소를 가져온다.
  const currentNav = e.target.closest('button');
  
  if(!currentNav) return;

  const currentLi = currentNav.parentNode;
  
  // 모든 li 요소에서 is-active 클래스를 제거한다.
  const navList = document.querySelectorAll('.nav > ul > li');
  navList.forEach((nav) => {
    nav.classList.remove('is-active');
  });

  // 현재 선택된 li 요소에 is-active 클래스를 추가한다.
  currentLi.classList.add('is-active');
}

// 배경 색상 변경 함수
function setBgColor(e){
  // 현재 선택된 캐릭터의 인덱스를 가져온다.
  const currentNav = e.target.closest('button');
  
  if(!currentNav) return;

  const index = currentNav.parentNode.dataset.index;
  
  // 배경색을 변경한다.
  const [colorA, colorB = '#000'] = data[index-1].color;

  document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB}`;
  
  

  {
    console.log('1. 선택된 캐릭터 인덱스 : ' + index)
    console.log('2. 선택된 캐릭터 : ' + currentNav.children[0].alt.slice(0, -4));
    console.log('3. 변경된 배경 색상 : ' + colorA, colorB);
  }
}

// 이미지 변경 함수
function setImage(e){

  // 현재 선택된 캐릭터의 인덱스를 가져온다.
  const currentNav = e.target.closest('button');
  
  if(!currentNav) return;
  
  const index = currentNav.parentNode.dataset.index;

  // 비주얼 이미지를 변경한다.
  const poster = document.querySelector('.visual > div > img');
  const imgFileName = data[index-1].name.toLowerCase();
  
  poster.src = `./assets/${imgFileName}.jpeg`;
  poster.alt = data[index-1].alt;

 
{ 
  console.log('4. 변경된 포스터 이미지 주소 : ' + poster.src);
  console.log('5. 변경된 포스터 alt : ' + poster.alt);
}
}


// 텍스트 변경 함수
function setNameText(e){
  // 현재 선택된 캐릭터의 인덱스를 가져온다.
  const currentNav = e.target.closest('button');
  
  if(!currentNav) return;
  
  const index = currentNav.parentNode.dataset.index;

  // 비주얼에 맞는 이름으로 텍스트를 변경한다.
  const name = document.querySelector('.nickName');
  name.textContent = data[index-1].name;

  {
    console.log('6. 변경된 상단 캐릭터 이름 : ' + name.textContent);
    console.log('------------------------------------');
  }
}

// 이미지 전환 애니메이션 함수
function addImageAnimation() {
  const poster = document.querySelector('.visual > div > img');

  // GSAP : 이미지가 서서히 사라졌다가 나타나도록
  gsap.fromTo(
    poster,
    { opacity: 0 }, // 시작
    { opacity: 1, duration: 0.8 } // 종료
  );
}



// 이벤트 리스너 등록
nav.addEventListener('click', addActiveClass);
nav.addEventListener('click', setBgColor);
nav.addEventListener('click', setImage);
nav.addEventListener('click', setNameText); 
nav.addEventListener('click', (e) => {
  addImageAnimation();
});












