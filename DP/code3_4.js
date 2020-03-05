/*
 * 다이나믹 프로그래밍으로 조건에 맞는 가장 긴 문자열 길이 구하기
 */

let NUM = 9430723;

function maxSubStringLength(num) {
  let str = String(num); // 문자열로 변환
  let maxLength = 0; // 부분 문자열 최대 길이

  // ! 시작 인덱스가 종료 인덱스보다 클 경우는 제외한다.
  let memo = {}; // 결과 캐싱용

  // 부분 문자열 길이가 1일 경우
  for (let len = 0; len < str.length; len++) {
    memo[[len, len]] = parseInt(str[len]);
  }

  // 부분 문자열의 길이가 2 이상일 경우
  for (let len = 2; len <= str.length; len++) {
    // 시작 인덱스
    for (let start = 0; start < str.length - len + 1; start++) {
      let end = len + start - 1; // 끝 인덱스
      let middle = Math.floor(len / 2); // 소수점 제거

      // ! middle은 start보다 뒤쪽에 위치해야 하므로 end - middle로 위치를 잡아준다.
      memo[[start, end]] =
        memo[[start, end - middle]] + memo[[end - middle + 1, end]];

      // len이 짞수이고, 왼쪽과 오른쪽 절반의 합이 같으며
      // len이 maxLength보다 크면 maxLength을 갱신
      if (
        len % 2 === 0 &&
        memo[[start, end - middle]] === memo[[end - middle + 1, end]] &&
        len > maxLength
      ) {
        console.log(`index ${start} ~ index ${end}`);
        maxLength = len;
      }
    }
  }

  return maxLength;
}

console.log(maxSubStringLength(NUM));
