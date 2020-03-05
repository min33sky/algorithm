/**
 * 문제18: 평균 점수
 * - 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하라
 * - 단, 소수점 자리는 모두 버린다.
 */

const SCORES = '70 82 95';

function getAverage(scores) {
  const arr = scores.split(' ').map(v => parseInt(v));
  let sum = 0;

  arr.forEach(e => {
    sum += e;
  });

  console.log(Math.floor(sum / arr.length));
}

getAverage(SCORES);
