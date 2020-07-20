import assert from 'assert';

function endZeros(value: number): number {
  // your code here
  // return String(value).match(/0+$/) === null
  // ? 0
  //   : String(value).match(/0+$/)![0].length;
  return String(value).match(/0*$/g)![0].length;
}

console.log('Example:');
console.log(endZeros(0));

// These "asserts" are used for self-checking
assert.equal(endZeros(0), 1);
assert.equal(endZeros(1), 0);
assert.equal(endZeros(10), 1);
assert.equal(endZeros(101), 0);
assert.equal(endZeros(245), 0);
assert.equal(endZeros(100100), 2);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
