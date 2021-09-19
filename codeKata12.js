// [문제]
// 문자로 구성된 배열을 input으로 전달하면, 문자를 뒤집어서 return 해주세요.

// 새로운 배열을 선언하면 안 됩니다.
// 인자로 받은 배열을 수정해서 만들어주세요.

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

const reverseString = (s) => {
  let temp;
  let start = 0;
  let end = s.length - 1;
  while (end > Math.floor(s.length / 2)) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    end--;
    start++;
  }
  return s;
};

const s = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(s));
