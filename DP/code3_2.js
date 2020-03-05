/*
 * 최소 요금 ( 다이나믹 프로그래밍 )
  : N번째 역까지 최소 요금 구하기
 */

// 요금표
const cost = [
  [0, 10, 75, 94],
  [-1, 0, 35, 50],
  [-1, -1, 0, 80],
  [-1, -1, -1, 0],
];

function minCost(station) {
  const result = [];

  result[0] = 0; // 시작 지점의 최소 요금
  result[1] = cost[0][1]; // 1번역 까지 최소 요금

  for (let i = 2; i <= station; i++) {
    result[i] = cost[0][i]; // 최소 요금을 직행 요금으로 임시 설정

    for (let j = 0; j < i; j++) {
      if (result[i] > result[j] + cost[j][i]) {
        result[i] = result[j] + cost[j][i];
      }
    }
  }

  return result[station];
}

console.time("timer");
console.log(minCost(3));
console.timeEnd("timer");
