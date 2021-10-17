// [문제]대문자 찾기
// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

// ▣ 출력설명
// 첫 줄에 대문자의 개수를 출력한다.

// ▣ 입력예제 1
// KoreaTimeGood
// ▣ 출력예제 1
// 3

// 이번 문제는 알파벳 문자를 입력받아 문자에 포함된 대문자의 총 갯수를 출력하는 문제이다.
// 간단히 for of문에서 조건문을 통해 toUpperCase메소드를 사용하여 비교하거나, charCodeAt() 메소드를 활용하여 아스키코드를 이용하여 문제를 풀 수 있다.

function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

function solution(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++; // 대문자: 65~90번, 소문자: 97~122번
  }

  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
