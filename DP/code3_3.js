/*
 * 완전 탐색으로 조건에 맞는 가장 긴 문자열 길이 구하기
 */

let NUM = 9430723;

function maxSubStringLength(num) {
  let str = String(num); // 문자열로 변환
  let maxLength = 0; // 부분 문자열 최대 길이

  // 부분 문자열 시작 인덱스
  for (let start = 0; start < str.length; start++) {
    // 부분 문자열 끝 인덱스 (짝수일 때만 유효하다)
    for (let end = start + 1; end < str.length; end += 2) {
      // 현재 부분 문자열의 길이
      let subStrLength = end - start + 1;

      // 현재 부분 문자열의 길이가 최대 길이보다 짧으면 무시한다.
      if (subStrLength <= maxLength) continue;

      let leftSum = 0;
      let rightSum = 0;
      let middle = subStrLength / 2;

      for (let idx = 0; idx < middle; idx++) {
        leftSum += parseInt(str[start + idx]);
        rightSum += parseInt(str[start + idx + middle]);
      }

      if (leftSum === rightSum) {
        console.log(`index ${start} ~ index ${end}`);
        maxLength = subStrLength;
      }
    }
  }

  return maxLength;
}

console.log(maxSubStringLength(NUM));
