// [문제]A를 #으로
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.

// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.

// ▣ 입력예제 1
// BANANA
// ▣ 출력예제 1
// B#N#N#

// 이번 문제는 문자를 입력받아 문자에 포함된 단어를 바꿔서 출력하는 문제이다.
// 간단히 for문에서 조건문을 통해 변경하거나, replace메소드를 정규표현식과 함께 사용해서 간단히 풀 수 있는 문제이다.

function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x == 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

function solution(s) {
  let answer = s;
  answer = s.replace(/A/g, '#');
  return answer;
}

let str = 'BANANA';
console.log(solution(str));
