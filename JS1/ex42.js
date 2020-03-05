/**
 * 문제 42: 2020년
 * - 5월 24일은 일요일을 반환해라
 * - ex) 1월 1일은 수요일, 2020년은 윤년
 */

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getDay(month, date) {
  const dates = new Date(`2020-${month}-${date}`);
  return DAYS[dates.getDay()];
}

console.log(getDay(1, 1));
console.log(getDay(5, 24));

// const DATES = {
//   1: 31,
//   2: 29,
//   3: 31,
//   4: 30,
//   5: 31,
//   6: 30,
//   7: 31,
//   8: 31,
//   9: 30,
//   10: 31,
//   11: 30,
//   12: 31,
// };

// const DAYS = {
//   0: 'WED',
//   1: 'THU',
//   2: 'FRI',
//   3: 'SAT',
//   4: 'SUN',
//   5: 'MON',
//   6: 'TUE',
// };

// function getDay(month, date) {
//   let dates = 0;

//   for (let i = 1; i < month; i++) {
//     dates += DATES[i];
//   }

//   dates += date;

//   return DAYS[(dates % 7) - 1];
// }

// console.log(getDay(1, 1));
// console.log(getDay(5, 24));
