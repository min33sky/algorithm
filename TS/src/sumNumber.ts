import assert from 'assert';

function sumNumbers(test: string): number {
  return test
    .split(' ')
    .filter((v) => !isNaN(Number(v)))
    .reduce((p, c) => Number(p) + Number(c), 0);
}

console.log('Example:');
console.log(sumNumbers('hi'));

// These "asserts" are used for self-checking
assert.equal(sumNumbers('hi'), 0);
assert.equal(sumNumbers('who is 1st here'), 0);
assert.equal(sumNumbers('my numbers is 2'), 2);
assert.equal(
  sumNumbers(
    'This picture is an oil on canvas ' +
      'painting by Danish artist Anna ' +
      'Petersen between 1845 and 1910 year',
  ),
  3755,
);
assert.equal(sumNumbers('5 plus 6 is'), 11);
assert.equal(sumNumbers(''), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
