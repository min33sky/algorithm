/**
 * 문제 60: 번호 매기기
 * - 이름을 가나다 순서대로 배정하고 번호 매기기
 */

const students = [
  '강은지',
  '김유정',
  '박현서',
  '최성훈',
  '홍유진',
  '박지호',
  '권윤일',
  '김채리',
  '한지호',
  '김진이',
  '김민호',
  '강채연',
];

let sorted = students.sort();

const result = sorted.reduce((acc, val, idx) => {
  acc.push([`번호: ${idx + 1}, 이름: ${val}`]);
  return acc;
}, []);

console.log(result);
