// [문제] 큰 수 출력하기
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.

// ▣ 출력설명
// 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.

// ▣ 입력예제 1
// 6
// 7 3 9 5 6 12

// ▣ 출력예제 1
// 7 9 6 12

// 이번문제는 N개의 정수를 입력받아 자신의 바로 앞 수보다 큰 수만 출력하는 문제이다.
// 첫번째 오는 수는 무조건 출력해야하며, for문을 돌면서 조건에 만족하는 수만 push하여 배열을 반환하면 된다.

function solution(arr) {
  let result = [];
  result.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) result.push(arr[i]);
  }
  return result;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));