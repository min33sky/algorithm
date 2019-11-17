/**
 * 역 사이 최소 비용 구하기
 */

const cost = [
  [0, 10, 75, 94],
  [-1, 0, 35, 50],
  [-1, -1, 0, 80],
  [-1, -1, -1, 0],
];

function minimumCost(start, dest) {
  if (start === dest || start + 1 === dest) {
    return cost[start][dest];
  }
  let minimum = cost[start][dest]; // 최초의 최소 비용

  for (let i = start + 1; i < dest; i++) {
    // start부터 dest 까지 최소 거리 구하기 = start부터 i번째 역까지 거리 + i번째 역부터 dest까지 거리
    let temp = minimumCost(start, i) + minimumCost(i, dest);
    if (temp < minimum) {
      console.log(i, dest, temp);
      minimum = temp;
    }
  }

  return minimum;
}

console.time("타이머");
console.log(minimumCost(0, 3));
console.timeEnd("타이머");
