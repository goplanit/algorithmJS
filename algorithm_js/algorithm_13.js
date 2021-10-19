// [문제]대소문자 변환
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

// ▣ 출력설명
// 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.

// ▣ 입력예제 1
// StuDY
// ▣ 출력예제 1
// sTUdy

// 이번 문제는 알파벳 문자를 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 문제이다.
// 조건문을 사용해 toUpperCase, toUpperCase 메소드를 이용하여 문제를 풀면 쉽게 해결가능하다.

function solution(s) {
  let result = '';
  for (let x of s) {
    x === x.toUpperCase()
      ? (result += x.toLowerCase())
      : (result += x.toUpperCase());
  }
  return result;
}

console.log(solution('StuDY'));
