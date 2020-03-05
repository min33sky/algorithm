/**
 * 문제 26: 행성 문제2
 * - 한글 행성을 영어로 출력
 */

const planets = {
  수성: 'Mercury',
  금성: 'Venus',
  지구: 'Earth',
  화성: 'Mars',
  목성: 'Jupiter',
  토성: 'Saturn',
  천왕성: 'Uranus',
  혜왕성: 'Neptune',
};

function getPlanet(kor) {
  return planets[kor];
}

console.log(getPlanet('화성'));
console.log(getPlanet('지구'));
console.log(getPlanet('수성'));
