/**
 * 완전 탐색으로 조건에 맞는 가장 긴 문자열 길이 구하기
 */

let num = 9430723;

function maxSubStringLength(num) {
  let str = String(num); // 문자열로 변환
  let maxLength = 0;

  // 문자열 시작 위치
  for (let i = 0; i < str.length; i++) {
    // 문자열 끝 위치 (짝수)
    for (let j = i + 1; j < str.length; j += 2) {
      // 현재 부분 문자열 길이
      let len = j - i + 1;

      // 최고 문자열 길이보다 짧은건 계산하지 않는다.
      if (maxLength >= len) continue;

      let leftSum = 0;
      let rightSum = 0;

      for (let k = 0; k < len / 2; k++) {
        leftSum += parseInt(str[i + k]);
        rightSum += parseInt(str[i + k + len / 2]); // 뒷 부분은 현재 문자열 길이의 반을 더하면 구할 수 있다.
      }

      if (leftSum === rightSum) {
        console.log(`인덱스${i} ~ 인덱스${j}`);
        maxLength = len;
      }
    }
  }

  return maxLength;
}

console.log(maxSubStringLength(num));
