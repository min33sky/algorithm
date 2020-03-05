/**
 * 문제 66: 블럭탑 쌓기
 *
 * 입력
   탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
   규칙 = "ABD"

 * 출력
   ["가능", "불가능", "가능", "가능", "가능"]
 */

const INPUT = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
const RULE = 'ABD';

function stackBlock(arr) {
  let stack = [];
  const results = [];

  arr.forEach(str => {
    str.split('').forEach((v, i) => {
      if (v === 'A' || v === 'B' || v === 'D') {
        stack.push(v);
      }
    });
    if (['BA', 'BAD', 'DA', 'DB', 'DAB', 'DBA'].includes(stack.join(''))) {
      results.push('불가능');
    } else {
      results.push('가능');
    }
    stack = [];
  });

  return results;
}

console.log(stackBlock(INPUT));

console.log('---------------------');

// 풀이 2

function stackBloack2(input, rule) {
  let result = [];
  for (let str of input) {
    result.push(checkRule(str, rule));
  }
  return result;
}

function checkRule(str, rule) {
  let ruleIndex = rule.indexOf(rule[0]); // 임시 규칙 인덱스

  for (let s of str) {
    if (rule.includes(s)) {
      // 규칙의 순서를 따르지 않을 경우 불가능
      if (ruleIndex > rule.indexOf(s)) {
        return '불가능';
      }
      ruleIndex = rule.indexOf(s);
    }
  }
  return '가능';
}

console.log(stackBloack2(INPUT, RULE));
