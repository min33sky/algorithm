/**
 * 문제 34: sort 구현하기
 */

const HEIGHTS1 = '176 156 155 165 166 169';
const HEIGHTS2 = '155 156 165 166 169 176';

function isSort(heights) {
  const org = heights.split(' ');
  const sort = heights.split(' ').sort((a, b) => a - b);
  let flag = true;
  org.forEach((v, i) => {
    console.log(v, sort[i]);
    if (v !== sort[i]) {
      flag = false;
      return;
    }
  });
  return flag;
}

console.log(isSort(HEIGHTS1));
console.log(isSort(HEIGHTS2));
