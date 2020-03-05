/**
 * 문자열 인터리빙 확인 문제
 */

const a = "bcc";
const b = "bbca";
const c = "bbcbcac";

function isInterleaving(a, b, c) {
  if (a.length === 0 && b.length === 0 && c.length === 0) {
    return true;
  }

  if (a.length + b.length !== c.length) return false;

  let caseA = false;
  let caseB = false;

  // a의 첫 글자와 c의 첫 글자가 같은 경우
  caseA = isInterleaving(a.slice(1), b, c.slice(1));

  // b의 첫 글자와 c의 첫 글자가 같은 경우
  caseB = isInterleaving(a, b.slice(1), c.slice(1));

  // 둘 중에 하나라도 true면 인터리빙이 맞다
  return caseA || caseB;
}

console.log(isInterleaving(a, b, c));
