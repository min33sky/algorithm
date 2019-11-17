/**
 * 숫자 n의 구구단 출력하기 (재귀 사용)
 */

function printTable(n, i) {
  if (i <= 0) return;
  if (i === 10) return;
  console.log(`${n} X ${i} = ${n * i}`);
  return printTable(n, i + 1);
}

printTable(2, 1);
