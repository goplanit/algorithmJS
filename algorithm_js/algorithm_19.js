// [문제]보이는 학생
// 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그
// 램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

// ▣ 입력설명
// 첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.

// ▣ 출력설명
// 선생님이 볼 수 있는 최대학생수를 출력한다.

// ▣ 입력예제 1
// 8
// 130 135 148 140 145 150 150 153
// ▣ 출력예제 1
// 5

// 이번문제는 선생님이 학생을 일렬로 세워놓고 보이는 사람의 수를 구하는 문제로, N개의 정수를 입력받아 자신의 바로 앞 수보다 큰 수가 몇개인지 확인하면 된다.
// 문제를 접근하는 방법은 2중 for문을 통해 비교하여 푸는 방법과 for문을 돌면서 변수에 값을 담아 비교하여 풀 수 있으며, 2중 for문의 경우
// 시간복잡도가 Oˆ2이므로 for문을 한번만 돌면서 풀 수 있는 방법을 통해 푸는 것이 좋다.
// 첫번째 오는 사람은 무조건 보이므로, result변수에 1을 카운트하고 비교할 수 있는 변수를 만들어 첫번째 변수의 키를 담아놓는다.
// 그리고 for문을 돌면서 현재의 수와 비교 변수와 키를 비교하여 키가 크다면 result 변수에 +1을 하고 비교변수에 현재의 수를 담으면 된다.

function solution(arr) {
  let result = 1,
    person = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > person) {
      result++;
      person = arr[i];
    }
  }
  return result;
}

let arr = [120, 128, 143, 140, 142, 149, 153, 151];
console.log(solution(arr));
