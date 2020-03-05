/**
 * 문제10: 별 찍기
 */

const STAR_NUM = 5;

function makeStar(num) {
  for (let i = 1; i <= num; i++) {
    let empty = '';
    let star = '*';
    for (let j = 1; j <= num - i; j++) {
      empty = empty.concat(' ');
    }

    for (let k = 1; k < 2 * i - 1; k++) {
      star = star + '*';
    }

    console.log(empty + star);
  }
}

makeStar(STAR_NUM);
