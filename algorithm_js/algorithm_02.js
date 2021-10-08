// [문제] 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
// 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.

// ▣ 입력예제 1
// 6 7 11

// ▣ 출력예제 1
// YES

// ▣ 입력예제 1
// 13 33 17

// ▣ 출력예제 1
// NO

// 삼각형의 조건은 세변 중에서 가장 큰 길이의 변보다 두변의 길이의 합이 커야지만 성립한다.
// 따라서 세변의 길이의 합과 가장 큰 변의 길이를 구하고, 두변의 길이의 합과 비교를 통해 문제를 풀면 된다.

function solution(a, b, c) {
  let answer, max;
  let total = a + b + c;
  a > b ? (max = a) : (max = b);
  c > max ? (max = c) : max;
  total - max <= max ? (answer = 'NO') : (answer = 'YES');
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
