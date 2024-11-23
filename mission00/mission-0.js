//* 1. 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요. *//
//* 설명: 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 존재하지 않으면 에러를 발생시키는 함수를 작성하세요. *//

// 첫 글자를 대문자로 변환하는 함수
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 오브젝트 선언
const suspect = {
  name: "Taylor",
  age: "30",
  job: "lawyer",
  relationship: "client",
};

// 특정 키에 해당하는 값을 반환하는 함수
function getValueAtObject(suspect, key) {
  const capitalizedKey = capitalize(key);

  if (suspect[key] === undefined) {
    console.error(`${capitalizedKey}: 존재하지 않는 정보입니다.`);
  } else {
    console.log(`${capitalizedKey}: ${suspect[key]}`);
  }
}

// 테스트 코드
console.log("-------------1번 예제-------------");
console.log("<<<obj: 용의자, key: 용의자 정보>>>");

getValueAtObject(suspect, "name");
getValueAtObject(suspect, "age");
getValueAtObject(suspect, "hobby");
getValueAtObject(suspect, "job");
getValueAtObject(suspect, "address");
getValueAtObject(suspect, "relationship");



// 강사님 풀이

// const obj = {
//   name: 'tiger',
//   age: 40,
// }

// function getValueAtObject(object,key){
  
//   if(!(Object.prototype.toString.call(object).slice(8, -1).toLowerCase() === 'object')) {
//     // console.error('getValueAtObject 함수의 첫 번째 인수는 객체 타입이어야 합니다.');
//     throw new TypeError('getValueAtObject 함수의 첫 번째 인수는 객체 타입이어야 합니다.');
//   }

//   if(typeof key !== 'string') {
//     console.error('getValueAtObject 함수의 두 번째 인수는 문자 타입이어야 합니다.');
//   }

//   if(!(key in object)) {
//     // console.error('해당 객체에는 key값이 존재하지 않습니다.');
//     throw new SyntaxError('해당 객체에는 key값이 존재하지 않습니다.');
//   }

//   return object[key];

// }

// console.log(getValueAtObject(obj, 'age'));

// function _getValueAtObject(object,key){

//   const entries = Object.entries(object);
 
//   let value;

//   // for(let [k,v] of entries) if(k === key ) return v;

//   entries.forEach(([k,v]) => k === key ? value = v : '')

//   return value;
    
  
  
// }


// console.log( _getValueAtObject(obj,'name') );


// 뭐부터 시작하지?

// 1. 함수의 이름
// 2. 함수의 실행부 작성
// 3. 함수의 로직
// 4. Validation


// ------------------------------------------------------------------------------------


//* 2. 문제: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요. *//
//* 설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요. *//

// 배열 선언
const members = ["수빈", "연준", "범규", "태현", "휴닝카이"];

// 특정 인덱스에 해당하는 값을 반환하는 함수
function getMemberAtArray(members, index) {
  members[index] === undefined
    ? console.error(`${index}: 해당 번호의 멤버는 존재하지 않습니다.`)
    : console.log(`${index + 1}: ${members[index]}`);
}

// 테스트 코드
console.log("                                  ");
console.log("-------------2번 예제-------------");
console.log("<<arr: 그룹, index: 멤버 번호>>");

getMemberAtArray(members, 0);
getMemberAtArray(members, 1);
getMemberAtArray(members, 8);
getMemberAtArray(members, 3);
getMemberAtArray(members, 4);
getMemberAtArray(members, -1);



// 강사님 풀이

// const arr = ['팟타이', '똠얌꿍', '푸팟퐁커리', '카오카무', '카오만까이', '카놈브앙', '바미끼여우꿍'];

// function getMemberAtArray(array, index) {

//   if(!Array.isArray(array)){
//     throw new Error(`전달된 첫 번째 인수의 데이터 타입은 ${typeof array} 타입입니다. 해당 함수의 첫 번째 인수는 배열 타입이어야 합니다.`);
//   }

//   if( index >= 0 && index < array.length ) {
//     return array[index];
//   } else {
//     throw new Error('...');
//   }

// }

// console.log(getMemberAtArray(arr, 6));
