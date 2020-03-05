/**
 * 문제 56: 객체의 함수 응용
 * - 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
 * - 출력: England 22023
 */

const nationWidth = {
  korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

function getNationSimilarToKorea(nationWidth) {
  let memo = {};

  for (let nation in nationWidth) {
    if (nation === 'korea') {
      continue;
    }
    memo[nation] = Math.abs(nationWidth[nation] - nationWidth['korea']);
  }

  let arr = Object.keys(memo).map(v => [v, memo[v]]);
  // * 이차원 배열 정렬하기
  arr.sort((a, b) => a[1] - b[1]);

  return arr[0];
}

console.log(getNationSimilarToKorea(nationWidth));
