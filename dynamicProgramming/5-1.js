/**
 * 재귀 호출을 사용해 최소 교정 비용 구하기
 */

const STR1 = "SUNDAY";
const STR2 = "SATURDAY";

function editDistance(str1, str2) {
  if (!str1 || str1.length === 0) return str2.length;
  if (!str2 || str2.length === 0) return str1.length;

  // 첫 글자가 같으면 교정 할 필요가 없으므로 다음 글자부터 교정 시작
  if (str1[0] === str2[0]) {
    return editDistance(str1.slice(1), str2.slice(1));
  }

  // 삽입, 삭제, 치환 연산

  // 1. 삭제 : 삭제한 다음 글자부터 교정
  let del = editDistance(str1.slice(1), str2);
  // 2. 치환 : 첫 글자가 같아졌으므로 두 문자열 모두 다음 글자부터 교정 시작
  let update = editDistance(str1.slice(1), str2.slice(1));
  // 3. 삽입 : 삽입한 글자와 비교 문자열의 첫 글자가 같으므로 비교 문자열의 다음 글자부터 교정 시작
  let insert = editDistance(str1, str2.slice(1));

  // 어떤 연산을 수행하건 하나의 연산을 수행했으므로 최소값에 1을 더해준다.
  return getMinimum(del, update, insert) + 1;
}

function getMinimum(a, b, c) {
  return a < b ? (a < c ? a : c) : b < c ? b : c;
}

console.log(editDistance(STR1, STR2));
