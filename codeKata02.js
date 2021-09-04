// [문제]
// reverse 함수에 정수인 숫자를 인자로 받습니다. 그 숫자를 뒤집어서 return해주세요.
// x: 숫자 return: 뒤집어진 숫자를 반환!
// 예들 들어, x: 1234 return: 4321
// x: -1234 return: -4321
// x: 1230 return: 321

// 1. 이중 for문 -> O(n^2)
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
}

// 2. for문과 indexOf 활용 -> O(n^2)
let arr = [];
for (let i = 0; i < nums.length - 1; i++) {
  if (nums.indexOf(target - nums[i]) !== -1) {
    arr.push(i);
    arr.push(nums.indexOf(target - nums[i]));
  }
}
return arr;

// 3. Object(Hash Table or Map), for문 활용 -> O(n)
const container = {};
for (let i = 0; i < nums.length; i++) {
  const another = target - nums[i];
  if (another in container) {
    return [container[another], i];
  }
  container[nums[i]] = i;
}

const reverse = (x) => {
  const result = [...(x + '')].reverse();

  if (result.includes('-')) {
    result.pop();
    result.unshift('-');
  }

  return Number(result.join(''));
};

// 똑같습니다~~!ㅎ

const reverse = (x) => {
  changeNum = String(x);

  let splitStr = changeNum.split('');
  let resverseStr = splitStr.reverse();

  if (splitStr.includes('-')) {
    resverseStr.pop();
    resverseStr.unshift('-');
  }

  return Number(resverseStr.join(''));
};

//생각하지도 못하는 방법임...;;

function reverse(x) {
  let minus = false;

  if (x < 0) {
    x *= -1; // -를 곱해주어서 양수로 만들기
    minus = true;
  }

  let numText = x.toString();
  let result = '';

  for (let i = numText.length - 1; i >= 0; i--) {
    result += numText[i];
  }

  // 기존 수가 음수일 경우, 다시 -를 곱해서 음수로 만들어준다.
  result = minus ? result * -1 : Number(result);

  return result;

  // 시원님풀이
  let s = x < 0 ? '-' : '';

  while (!(x == '0' || x == '-0')) {
    s += x % 10 < 0 ? -x % 10 : x % 10;
    x = +x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
  }

  return +s;
}
