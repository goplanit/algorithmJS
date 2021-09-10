// [문제]
// nums는 숫자로 이루어진 배열입니다. 가장 자주 등장한 숫자를 k 개수만큼 return해주세요.

// nums = [1,1,1,2,2,3],
// k = 2

// return [1,2]

// nums = [1]
// k = 1

// return [1]

function topK(nums, k) {
  const obj = nums.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const arr = Object.entries(obj);
  const result = [];
  arr.sort(function (a, b) {
    return b[1] - a[1];
  });
  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }
  return result.map((num) => Number(num));
}
