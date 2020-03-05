/**
 * 문제 38: 아르바이트
 */

const SCORES = '97 86 75 66 55 97 85 97 97 95';

function buyCandy(scores) {
  const sortArr = scores.split(' ').sort((a, b) => a - b);

  const highScore = [];
  let count = 0;

  // * 가장 높은 점수 3개를 찾을 때까지 배열을 순회하자
  while (highScore.length < 3) {
    const item = sortArr.pop();
    if (!highScore.includes(item)) {
      highScore.push(item);
    }
    count++;
  }

  return count;
}

console.log(buyCandy(SCORES));
