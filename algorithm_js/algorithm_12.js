// [문제]대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

// ▣ 출력설명
// 첫 줄에 대문자로 통일된 문자열이 출력된다.

// ▣ 입력예제 1
// ItisTimeToStudy
// ▣ 출력예제 1
// ITISTIMETOSTUDY

// 이번 문제는 알파벳 문자를 입력받아 모든 문자를 대문자로 출력하는 문제이다.
// 가장 쉽게 구현하는 방법은 toUpperCase 메소드를 이용하여 문제를 풀 수 있지만,
// charCodeAt() 메소드를 활용해 아스키코드로 변환한 다음, 대문자와 소문자의 아스키코드 숫자의 차이인 32를 뺀 후 fromCharCode를 이용해 문자로 변환하여 풀 수 있다.

// toUpperCase메소드로 구현
function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
}

// 아스키코드로 접근하여 구현
function solution(s) {
  let answer = '';
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
