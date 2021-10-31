// [문제]회문 문자열
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 "NO" 를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// ▣ 입력설명
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

// ▣ 입력예제 1
// gooG
// ▣ 출력예제 1
// YES

// 이번 문제는 앞이나 뒤에서 읽을 때 똑같은 문자열인 회문 문자열이 맞는지 확인하는 문제이다.
// 여기서 중요한 점은 문제에서 대&소문자를 구분하는지의 여부를 먼저 확인하여 진행하는 것이다.
// 회문 문자열을 확인하는 문제의 경우 보통 reverse 메소드를 사용해 문자열을 뒤집어 기존 문자열과 비교하는 방법과,
// for문을 돌면서 앞과 뒤를 각각 비교하여 풀 수 있는데, 두가지 방법을 다 사용해 문제에 따라 적용하는 것이 좋다.

function solution(str) {
  let result = 'YES';
  s = str.toLowerCase();
  if (s.split('').reverse().join('') !== s) return 'NO';
  return result;
}

function solution(str) {
  let result = 'YES';
  s = str.toLowerCase();
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return 'NO';
  }
  return result;
}

let str = 'gooiooG';
console.log(solution(str));
