// @ts-nocheck
/**
 * 앞부분과 뒷부분의 합이 같은 가장 긴 부분 문자열 구하기 (다이나믹 프로그래밍)
 */

const num = 9430723;

function maxSubStringLength(num) {
  let str = String(num); // 문자열로 변환
  let maxLength = 0;

  const sum = {}; // ex) { [a,b]: 문자열 길이, }

  // 부분 문자열이 1개일 때 합
  for (i = 0; i < str.length; i++) {
    sum[[i, i]] = parseInt(str[i]);
  }

  // 길이가 2인 부분 문자열부터 전체문자열까지 검색
  for (let len = 2; len <= str.length; len++) {
    // 부분 문자열 시작 위치
    for (let i = 0; i < str.length - len + 1; i++) {
      let j = i + len - 1; // 부분 문자열 끝나는 부분
      let k = Math.floor(len / 2); // ! 문자열의 앞, 뒤를 나누는 부분 (소수점 때문에 floor함수 사용)

      // ! k는 i보다 뒤쪽에 위치해야 하므로 j - k로 위치를 잡아준다.
      sum[[i, j]] = sum[[i, j - k]] + sum[[j - k + 1, j]];

      // len이 짞수이고, 왼쪽과 오른쪽 절반의 합이 같으며
      // len이 maxLen보다 크면 maxLen을 갱신
      if (
        len % 2 === 0 &&
        sum[[i, j - k]] === sum[[j - k + 1, j]] &&
        len > maxLength
      ) {
        console.log(`인덱스 ${i} ~ 인덱스 ${j}`);
        maxLength = len;
      }
    }
  }
  return maxLength;
}

console.log(maxSubStringLength(num));
