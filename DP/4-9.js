// @ts-nocheck
/**
 * 카데인 알고리즘으로 부분 배열의 합 최대값 구하기
 */

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function maxSubArraySum() {
  let max = 0;
  let tempMax = 0;

  for (let i = 0; i < arr.length; i++) {
    tempMax += arr[i];
    /**
     * * 알고리즘 *
     * i번째부터 j번째까지 합이 음수일 때 j+1번째까지의 합은 j+1보다 작으므로
     * 그전까지의 합은 무시하고 그 다음부터 다시 더해간다.
     */
    if (tempMax < 0) {
      tempMax = 0;
    }
    if (max < tempMax) {
      max = tempMax;
    }
  }

  return max;
}

console.time("timer");
console.log(maxSubArraySum());
console.timeEnd("timer");
