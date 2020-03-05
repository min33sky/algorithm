// @ts-nocheck
/**
 * 연속된 부분 배열의 최대값 구하기
 * : [-2, -3, 4, -1, -2, 1, 5, -3]
 */

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function maxSubArraySum() {
  let max = 0;

  // 시작 지점
  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0;
    // 끝 지점
    for (let j = i; j < arr.length; j++) {
      tempSum += arr[j];
      if (tempSum > max) {
        max = tempSum;
      }
    }
  }

  return max;
}

console.time("timer");
console.log(maxSubArraySum());
console.timeEnd("timer");
