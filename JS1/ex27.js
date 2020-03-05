/**
 * 문제 27: 객체 만들기
 *
 */

const NAMES = 'Yujin Hyewon';
const SCORES = '70 100';

function getObject() {
  const namesArr = NAMES.split(' ');
  const scoresArr = SCORES.split(' ');
  const obj = {};

  namesArr.reduce((acc, v, i) => {
    acc[namesArr[i]] = scoresArr[i];
    return acc;
  }, obj);

  return obj;
}

console.log(getObject());
