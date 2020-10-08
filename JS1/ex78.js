/**
 * 문제 78) 원형 테이블
 */

const INPUT = '6 3';

function solution(str) {
  let [N, K] = str.split(/\s/);
  let idx = 0;

  N = +N;
  K = +K;

  let arr = Array(N)
    .fill(0)
    .map((item, idx) => idx + 1);

  while (arr.length > 2) {
    // 배열의 요소를 하나씩 눌인다. (K만큼 이동해서 제거)
    if (idx > arr.length - 1) {
      // 배열 인덱스 범위를 넘어갔으므로 다시 앞으로 이동
      idx = idx - arr.length;
    }

    arr.splice(idx, 1);
    idx += K;
    idx -= 1;
  }

  return arr;
}

console.log(solution(INPUT));
