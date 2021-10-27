// [문제]점수계산
// OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다. 여러 개의 OX 문제로 만들어진
// 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 하기
// 로 하였다. 1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가
// 답이 맞는 처음 문제는 1점으로 계산한다. 또한, 연속으로 문제의 답이 맞는 경우에서 두 번째
// 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계
// 산한다.
// 예를 들어, 아래와 같이 10 개의 OX 문제에서 답이 맞은 문제의 경우에는 1로 표시하고, 틀린 경
// 우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어, 총 점수는
// 1+1+2+3+1+2=10 점이다.

// 1 0 1 1 1 0 0 1 1 0

// 채점 1 0 1 1 1 0 0 1 1 0
// 점수 1 0 1 2 3 0 0 1 2 0

// 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.

// ▣ 입력설명
// 첫째 줄에 문제의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 N개 문제의 채점 결과를 나
// 타내는 0 혹은 1이 빈 칸을 사이에 두고 주어진다. 0은 문제의 답이 틀린 경우이고, 1은 문제의
// 답이 맞는 경우이다.

// ▣ 출력설명
// 첫째 줄에 입력에서 주어진 채점 결과에 대하여 가산점을 고려한 총 점수를 출력한다.

// ▣ 입력예제 1
// 10
// 1 0 1 1 1 0 0 1 1 0
// ▣ 출력예제 1
// 10

// 이번문제는 N개의 0과 1의 정수를 입력받고, 1을 입력받을 경우 점수를 1점을 획득하며, 연속 1이 나올경우 1점씩 누적해 추가하여 점수를 구하는 문제이다.
// 1과 0으로만 이루어진 배열이 주어지므로 for of 문을 통해 값을 입력받고, count 변수를 만들어 연속 1이 나올 시 점수를 누적할 수 있도록 하여 문제를 풀 수 있다.

function solution(arr) {
  let result = 0,
    count = 0;
  for (let x of arr) {
    if (x === 1) {
      count++;
      result += count;
    } else count = 0;
  }

  return result;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
