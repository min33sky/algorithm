/**
 * 문제 13: 몇 번째 행성인가요?
 *
 */

const planets = [
  '수성',
  '금성',
  '지구',
  '화성',
  '목성',
  '토성',
  '천왕성',
  '해왕성',
];

// function getPlanet(number) {
//   console.log(planets[number - 1]);
// }

// getPlanet(1);

const number = Number(prompt('몇 번째 행성을 출력할까요?'));

console.log(planets[number - 1]);
