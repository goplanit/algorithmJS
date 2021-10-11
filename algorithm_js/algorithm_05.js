// [문제] 최소값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.

// ▣ 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.

// ▣ 입력예제 1
// 5 3 7 11 2 15 17
// ▣ 출력예제 1
// 2

// 이번문제는 input값으로 배열이 주어지고, 배열 안의 숫자 중 최소값을 구하는 문제이다.
// 최소값을 구할 때 정수 중에서 최대 정수값을 나타내는 Number.MAX_SAFE_INTEGER을 이용해 최소값을 초기설정하고,
// if문을 이용해 값을 비교한 후, 더 적은 값을 min함수에 넣어주는 방식으로 문제를 풀 수 있다.

function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// Math함수의 min 메서드를 이용하여 배열의 전개연산자를 이용하여 문제를 풀 수 있다.

function solution(arr) {
  let min = Math.min(...arr);
  return min;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
