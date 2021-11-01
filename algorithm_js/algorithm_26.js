// [문제]유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 "NO"를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
// 알파벳 이외의 문자들의 무시합니다.

// ▣ 입력설명
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

// ▣ 입력예제 1
// found7, time: study; Yduts; emit, 7Dnuof
// ▣ 출력예제 1
// YES

// 이번 문제는 앞이나 뒤에서 읽을 때 똑같은 문자열인 회문 문자열이 맞는지 확인하는 문제이다.
// 입력값에 문자열 이외에도 기호들이 함께 입력이 되므로, 기호를 변경하는 로직을 구성해야한다.
// 회문 문자열을 확인하는 문제의 경우 보통 reverse 메소드를 사용해 문자열을 뒤집어 기존 문자열과 비교하여 맞을 경우 'yes', 틀릴경우 'No'를 출력하면 된다.

function solution(s) {
  let result = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) return 'NO';
  return result;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
