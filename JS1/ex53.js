/**
 * 문제 53: 괄호 문자열
 */

function checkBracket(str) {
  let result = true;
  let arr = str.split('');
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    let bracket = arr[i];

    // 여는 괄호면 push, 닫는 괄호면 pop해서 비교하기

    if (bracket === '(' || bracket === '{' || bracket === '[') {
      stack.push(bracket);
    } else {
      let prevBracket = stack.pop();

      if (bracket === ')') {
        if (prevBracket !== '(') {
          result = false;
          break;
        }
      } else if (bracket === '}') {
        if (prevBracket !== '{') {
          result = false;
          break;
        }
      } else if (bracket === ']') {
        if (prevBracket !== '[') {
          result = false;
          break;
        }
      }
    }
  }

  // 짝맞춤에 실패했을 경우도 탈락
  if (stack.length) {
    result = false;
  }

  return result;
}

console.log(checkBracket('()'));
console.log(checkBracket('(('));
console.log(checkBracket('({})'));
console.log(checkBracket('([}])'));
console.log(checkBracket('()())'));
