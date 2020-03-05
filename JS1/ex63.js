/**
 * 문제 63: 친해지고 싶어
 */

const INPUT1 = '복잡한 세상 편하게 살자';
const INPUT2 = 'Real Madrid FC Barcelona';

function shortChar(str) {
  let arr = str.split(' ');

  const result = arr.reduce((acc, val) => {
    acc.push(val[0]);
    return acc;
  }, []);

  return result.join('');
}

console.log(shortChar(INPUT1));
console.log(shortChar(INPUT2));

// 참고
// for (let s of user_input){
//   result += s.slice(0, 1);
// }
