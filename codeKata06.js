// [문제] 로마자에서 숫자로 바꾸기
// 1~3999 사이의 로마자 s를 인자로 주면 그에 해당하는 숫자를 반환해주세요. 로마 숫자를 숫자로 표기하면 다음과 같습니다.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 로마자를 숫자로 읽는 방법은 로마자를 왼쪽부터 차례대로 더하면 됩니다. III = 3 XII = 12 XXVII = 27 입니다.
// 그런데 4를 표현할 때는 IIII가 아니라 IV 입니다. 뒤의 숫자에서 앞의 숫자를 빼주면 됩니다. 9는 IX입니다.
// I는 V와 X앞에 와서 4, 9 X는 L, C앞에 와서 40, 90 C는 D, M앞에 와서 400, 900

function romanToNum(s) {
  const refArr = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const arrayS = s.split('');
  const newArr = arrayS.map((alphabet) => refArr[alphabet]);
  let result = 0;

  for (i = 0; i < s.length; i++) {
    newArr[i] < newArr[i + 1] ? (result -= newArr[i]) : (result += newArr[i]);
  }
  return result;
}

const s = 'XXIII';
console.log(romanToNum(s));
