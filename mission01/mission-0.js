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







//* 2. 문제: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요. *//
//* 설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요. *//

const members = ["수빈", "연준", "범규", "태현", "휴닝카이"];

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
