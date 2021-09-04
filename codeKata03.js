// [문제]
// String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.
// str: 텍스트 return: 중복되지 않은 알파벳 길이 (숫자 반환)
// 예를 들어, str = "abcabcabc" return 은 3 => 'abc' 가 제일 길기 때문
// str = "aaaaa" return 은 1 => 'a' 가 제일 길기 때문
// str = "sttrg" return 은 3 => 'trg' 가 제일 길기 때문

const getLengthOfStr = (str) => {
  let newStrArr = [];
  let maxLengthStr = 0;

  for (let i in str) {
    if (!newStrArr.includes(str[i])) {
      newStrArr.push(str[i]);
      console.log(newStrArr);
      if (maxLengthStr < newStrArr.length) {
        maxLengthStr = newStrArr.length;
        console.log(maxLengthStr);
      }
    } else {
      newStrArr = newStrArr.slice(newStrArr.indexOf(str[i]) + 1);
      newStrArr.push(str[i]);
      console.log(newStrArr);
    }
  }
  return maxLengthStr;
};

const a = 'abcdabcabc';

console.log(getLengthOfStr(a));
