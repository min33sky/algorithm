// @ts-nocheck
/**
 * 문자열 인터리빙 확인 문제 (다이나믹 프로그래밍)
 */

const a = "bcc";
const b = "bbca";
const c = "bbcbcac";

function isInterleaving(a, b, c) {
  // a와 b 문자열의 길이의 합이 c 문자열의 길이와 다를 때
  if (a.length + b.length !== c.length) return false;

  // 빈 문자일 경우도 포함하므로 (인덱스 0) 각각 1셀 추가해서 배열 생성
  const memo = Array(a.length + 1)
    .fill(true)
    .map(e => Array(b.length + 1).fill(true));

  // 첫 번째 행 채우기
  for (let j = 1; j <= b.length; j++) {
    if (b[j - 1] !== c[j - 1]) {
      memo[0][j] = false;
    } else {
      memo[0][j] = memo[0][j - 1];
    }
  }

  // 첫 번째 열 채우기
  for (let i = 1; i <= a.length; i++) {
    if (a[i - 1] !== c[i - 1]) {
      memo[i][0] = false;
    } else {
      memo[i][0] = memo[i - 1][0];
    }
  }

  // 나머지 채우기
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      // 현재 셀의 A, B, C의 글자
      let currentA = a[i - 1];
      let currentB = b[j - 1];
      let currentC = c[i + j - 1];

      // C의 글자가 A와 같고 B와는 다를 때
      if (currentC === currentA && currentC !== currentB) {
        memo[i][j] = memo[i - 1][j];
      } else if (currentC === currentB && currentC !== currentA) {
        memo[i][j] = memo[i][j - 1];
      } else if (currentC === currentB && currentC === currentA) {
        memo[i][j] = memo[i - 1][j] || memo[i][j - 1];
      } else {
        memo[i][j] = false;
      }
    }
  }

  // 저장된 배열 출력
  console.log(memo);

  return memo[a.length][b.length];
}

console.log(isInterleaving(a, b, c));
