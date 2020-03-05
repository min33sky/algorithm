/**
 * 문제 61: 문자열 압축하기
 */

const INPUT = 'bbbbaaacdddd';

function compressStr(input) {
  let memo = {};

  input.split('').forEach(val => {
    if (!memo[val]) {
      memo[val] = 1;
    } else {
      memo[val]++;
    }
  });

  const arr = Object.keys(memo).map(v => {
    return `${v}${memo[v]}`;
  });

  return arr.sort().join('');
}

console.log(compressStr(INPUT));
