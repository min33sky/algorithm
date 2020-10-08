import assert from 'assert';

// function nearestValue(values: number[], search: number): number {
//   // your code here
//   let menor = Math.max(...values.filter((valu) => valu <= search));
//   let mayor = Math.min(...values.filter((valu) => valu >= search));
//   if (mayor - search < search - menor) return mayor;
//   return menor;
// }

function nearestValue(values: number[], search: number): number {
  return values.sort(
    (a, b) => Math.abs(search - a) - Math.abs(search - b) || a - b,
  )[0];
}

console.log('Example:');
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));

// These "asserts" are used for self-checking
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
assert.equal(nearestValue([-1, 2, 3], 0), -1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
