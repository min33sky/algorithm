/**
 * 조합을 계산하는 재귀 함수
 */

function combination(n, m) {
  if (n === 0 || m === 0 || n === m) return 1;
  return combination(n - 1, m - 1) + combination(n - 1, m);
}
