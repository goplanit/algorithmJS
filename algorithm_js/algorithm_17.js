// [문제]중복단어제거
// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.

// ▣ 출력설명
// 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.

// ▣ 입력예제 1
// 5
// good
// time
// good
// time
// student
// ▣ 출력예제 1
// good
// time
// student

// 이번문제는 N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 문제이다.
// filter와 indexOf메소드를 사용하여 indexOf 값의 인덱스와 현재 인덱스가 일치할 경우만 return하여 중복을 제외시키면 된다.

function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    return s.indexOf(v) === i;
  });

  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
