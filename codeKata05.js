// [문제]
// strs은 단어가 담긴 배열입니다. 공통된 시작 단어(prefix)를 반환해주세요.
// 예를 들어 strs = ['start', 'stair', 'step'] return은 'st'
// strs = ['start', 'wework', 'today'] return은 ''

const getPrefix = (strs) => {
  let prefix = strs[0];
  if (!strs.length) {
    prefix = '';
  }

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

const strs = ['start', 'stair', 'step'];
console.log(getPrefix(strs));
