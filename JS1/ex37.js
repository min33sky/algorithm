/**
 * 문제 37: 반장 선거
 */

const candidates = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';

function selectPresident(candidates) {
  let countObj = candidates.split(' ').reduce((acc, v) => {
    if (!acc[v]) {
      acc[v] = 1;
    } else {
      acc[v] += 1;
    }
    return acc;
  }, {});

  const president = Object.keys(countObj).reduce((acc, val) => {
    return countObj[acc] > countObj[val] ? acc : val;
  });

  console.log(
    `${president}이(가) 총 ${countObj[president]} 표로 반장이 되었습니다.`,
  );
}

selectPresident(candidates);
