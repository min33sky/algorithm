// @ts-nocheck
/**
 * 다이나믹 프로그래밍을 사용해 최소 교정 비용 구하기
 */

const STR1 = "SUNDAY";
const STR2 = "SATURDAY";

function editDistance(str1, str2) {
  if (!str1 || str1.length === 0) return str2.length;
  if (!str2 || str2.length === 0) return str1.length;

  const memo = Array(str1.length + 1)
    .fill(0)
    .map(e => Array(str2.length + 1).fill(0));

  // 0열
  for (let i = 0; i <= str1.length; i++) {
    memo[i][0] = i;
  }

  // 0행
  for (let j = 0; j <= str2.length; j++) {
    memo[0][j] = j;
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      // 두 글자가 같다면
      if (str1[i - 1] === str2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        // 두 글자가 다르다면
        memo[i][j] =
          getMinimum(memo[i - 1][j], memo[i - 1][j - 1], memo[i][j - 1]) + 1;
      }
    }
  }

  console.log(memo);

  return memo[str1.length][str2.length];
}

function getMinimum(a, b, c) {
  return a < b ? (a < c ? a : c) : b < c ? b : c;
}

console.log(editDistance(STR1, STR2));
