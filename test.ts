// 문제 1: 사용되지 않는 변수
const unused: string = "This variable is not used";

// 문제 2: 하드코딩된 비밀번호 (Security Hotspot)
const apiKey: string = "hardcoded-key"; // 보안 문제 발생 가능

// 문제 3: 명시적 타입 선언 누락
function noExplicitType(param) {
  return param; // TypeScript에서는 매개변수와 반환값의 타입을 명시하는 것이 권장됨
}

// 문제 4: any 타입 사용
let data: any = "This can be anything"; // TypeScript의 any 타입은 피하는 것이 좋음

// 문제 5: Null 체크 없이 사용 (Potential runtime error)
let obj: { name?: string } = {};
console.log(obj.name.toUpperCase()); // 에러 발생 가능: name이 undefined일 수 있음

// 문제 6: 중복된 코드
function duplicateFunction1() {
  return "This is duplicate";
}

function duplicateFunction2() {
  return "This is duplicate"; // 중복 코드 감지
}