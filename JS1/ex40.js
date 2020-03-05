/**
 * 문제 40: 놀이동산에 가자
 *
 */

const LIMIT_WEIGHT = 50;
const PEOPLES = 5;
const weights = '20 20 20 20 20';

function takeRides(weights, peoples) {
  let count = 0;
  let total = 0;
  let w = weights.split(' ');

  for (let i = 0; i < peoples; i++) {
    total += parseInt(w[i], 10);
    if (total < LIMIT_WEIGHT) {
      count++;
    }
  }

  return count;
}

console.log(takeRides(weights, PEOPLES));
