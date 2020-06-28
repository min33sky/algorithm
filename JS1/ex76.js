/**
 * 문제 76: 안전한 땅
 */

let square = 5;
let scanRange = 3;
let mineArea = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

let value = 0;
let valueArray = [];

for (let addI = 0; addI <= square - scanRange; addI++) {
  for (let addJ = 0; addJ <= square - scanRange; addJ++) {
    for (let i = addI; i <= scanRange - 1 + addI; i++) {
      for (let j = addJ; j <= scanRange - 1 + addJ; j++) {
        value += mineArea[i][j];
      }
    }
    valueArray.push(value);
    value = 0;
  }
}

console.log(Math.max.apply(null, valueArray));
