// [문제]가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
// 각 문자열의 길이는 서로 다릅니다.

// ▣ 출력설명
// 첫 줄에 가장 긴 문자열을 출력한다.

// ▣ 입력예제 1
// 5
// teacher
// time
// student
// beautiful
// good
// ▣ 출력예제 1
// beautiful

// 이번 문제는 N개의 문자열을 입력받아 그 중 가장 긴 문자열을 출력하는 문제이다.
// 가장 긴 문자열과 문자의 길이를 담을 수 있는 변수 2개를 만들고,
// for of문을 활용해 현재의 문자열의 길이와 변수를 비교한 후 변수의 값보다 크다면 만들어둔 변수에 값을 저장한 후 출력하면 된다.

function solution(s) {
  let result = '',
    max = Number.MIN_SAFE_INTEGER; // 초기값으로 가장 작은 값을 담도록 MIN_SAFE_INTEGER메소드를 이용한다.
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      result = x;
    }
  }
  return result;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
