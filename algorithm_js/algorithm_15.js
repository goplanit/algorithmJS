// [문제]가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
// 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.

// ▣ 입력예제 1
// study
// ▣ 출력예제 1
// u
// ▣ 입력예제 2
// good
// ▣ 출력예제 2
// oo

// 이번 문제는 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하고 만약 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력하는 문제이다.
// 가운데 문자열을 담을 수 있는 변수와 중간자리 index를 확인하는 변수를 만들고,
// 삼항연산자를 이용해 %2를 통해 나머지가 1일 경우와 0일 경우를 확인하여 출력할 단어의 갯수를 확인한다.
// 부분 문자열을 반환할 때, substring()메서드 또는 substr()메소드를 사용해 가운데 문자를 부분 반환하면 된다.

function solution(s) {
  let result;
  let middle = Math.floor(s.length / 2); // 나누기 2를 할 경우 0부터 나누므로 글자수가 짝수일때 중간자리 +1이 된다.
  s.length % 2 === 1
    ? (result = s.substring(middle, middle + 1)) // str.substring(indexStart[, indexEnd])
    : (result = s.substring(middle - 1, middle + 1)); // 짝수일 경우 중간자리 -1을 해야 중간자리 2자리를 선택할 수 있다.

  // substr()메서드 사용 시
  s.length % 2 === 1
    ? (result = s.substr(middle, 1)) // str.substring(indexStart[, indexEnd])
    : (result = s.substr(middle - 1, 2));
  return result;
}
console.log(solution('study'));
console.log(solution('good'));
