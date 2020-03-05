// @ts-nocheck
/**
 * 최소 요금 계산 (메모화 전략)
 */

// 요금표
const cost = [
  [0, 10, 75, 94],
  [-1, 0, 35, 50],
  [-1, -1, 0, 80],
  [-1, -1, -1, 0],
];

const memo = {}; // 메모화에 필요한 캐싱용 객체

function minCost(start, dest) {
  if (memo[[start, dest]]) {
    // 이미 캐싱된 값이 있을 경우엔 그 값을 사용
    return memo[[start, dest]];
  } else if (start === dest || start === dest - 1) {
    // 출발역이 도착역과 같거나 한 정거장 전일 경우엔 요금표 값을 이용
    return (memo[[start, dest]] = cost[start][dest]);
  }

  // 직행 요금을 최소값으로 설정
  let minimum = cost[start][dest];

  for (i = start + 1; i < dest; i++) {
    const temp = minCost(start, i) + minCost(i, dest);
    if (minimum > temp) {
      minimum = temp;
    }
  }
  return (memo[[start, dest]] = minimum);
}

console.time("timer");
console.log(minCost(0, 3));
console.timeEnd("timer");
