/**
 * 문제 75: 이상한 369
 */

function solution(number) {
  let count = 1;
  let result = 0;
  const obj = { 3: 1, 6: 2, 9: 3 };

  // 3,6,9외에 숫자가 들어가면 종료
  if (/[1245780]/g.exec(number)) {
    return -1;
  }

  let num = number.split('');

  while (num.length) {
    result += obj[parseInt(num.pop(), 10)] * count;
    count *= 3; // 자리수가 바뀔 때마다 3씩 곱한다.
  }

  return result;
}

console.log(solution('93'));
