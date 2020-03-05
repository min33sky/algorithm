/**
 * 역 사이 최소 비용 구하기
 * - 정방향으로만 이동이 가능하다.
 * ! 중간역과 비용 둘 다 구하기
 * ! 메모화 전략을 사용하기
 */

const cost = [
  [0, 10, 75, 94],
  [-1, 0, 35, 50],
  [-1, -1, 0, 80],
  [-1, -1, -1, 0],
];

const memo = {}; // 메모화 할 공간

function getMinCost(start, dest) {
  // 기존 값이 있으면 그 값을 반환
  if (memo[[start, dest]]) return memo[[start, dest]];

  if (start === dest || start + 1 === dest) {
    memo[[start, dest]] = [cost[start][dest], start];
    return memo[[start, dest]];
  }

  // [최소 요금, 중간 역] 설정
  let [minCost, intermediateStation] = [cost[start][dest], start];

  // 중간 정차역들 간의 최소 요금 비교하기
  for (let middle = start + 1; middle < dest; middle++) {
    let temp = getMinCost(start, middle)[0] + getMinCost(middle, dest)[0];

    if (temp < minCost) {
      minCost = temp;
      intermediateStation = middle;
    }
  }

  // 최소 요금과 중간 역을 캐싱한다.
  memo[[start, dest]] = [minCost, intermediateStation];

  return memo[[start, dest]];
}

console.time("timer");
console.log(getMinCost(0, 3));
console.timeEnd("timer");

console.log(Object.keys(memo));
console.log(memo);
