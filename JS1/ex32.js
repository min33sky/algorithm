/**
 * 문제 32: 문자열 만들기
 * - 문자열을 입력받음녀 단어의 갯수를 출력하는 프로그램
 *
 */

const STR = '안녕하세요. 저는 바르셀로나에서 뛰고있는 리오넬메시입니다.';

function getWordCountS(str) {
  return str.split(' ').length;
}

console.log(getWordCountS(STR));
