// [문제]
// 두 개의 input에 복소수(complex number)가 string 으로 주어집니다. 복소수란 a+bi 의 형태로, 실수와 허수로 이루어진 수입니다.
// input으로 받은 두 수를 곱해서 반환해주세요. 반환하는 표현도 복소수 형태의 string 이어야 합니다.
// 복소수 정의에 의하면 (i^2)는 -1 이므로 (i^2) 일때는 -1로 계산해주세요.
// (제곱 표현이 안 되어 i의 2제곱을 (i^2)라고 표현했습니다.)

// 예제 1:
// Input: "1+1i", "1+1i"
// Output: "0+2i"
// Input: "1+1i", "1+1i"
// Output: "0+2i"
// 설명:

// (1 + i) * (1 + i) = 1 + i + i + i^2 = 2i
// (1 + i) * (1 + i) = 1 + i + i + i^2 = 2i
// 2i를 복소수 형태로 바꾸면 0+2i.

const complexNumberMultiply = (a, b) => {
  let firstArr = a.substring(0, a.length - 1).split('+');
  const a1 = Number(firstArr[0]);
  const a2 = Number(firstArr[1]);
  console.log(a1, a2);
  let secondArr = b.substring(0, b.length - 1).split('+');
  const b1 = Number(secondArr[0]);
  const b2 = Number(secondArr[1]);
  console.log(b1, b2);

  return `${a1 * b1 - a2 * b2}+${a1 * b2 + a2 * b1}i`;
};
const a = '1+1i';
const b = '1+1i';
console.log(complexNumberMultiply(a, b));
