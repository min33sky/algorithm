import assert from 'assert';

function countDigits(text: string): number {
  // your code here
  return text.match(/[0-9]/g) ? text.match(/[0-9]/g)!.length : 0;
}

console.log('Example:');
console.log(countDigits('hi'));

// These "asserts" are used for self-checking
assert.equal(countDigits('hi'), 0);
assert.equal(countDigits('who is 1st here'), 1);
assert.equal(countDigits('my numbers is 2'), 1);
assert.equal(
  countDigits(
    'This picture is an oil on canvas ' +
      'painting by Danish artist Anna ' +
      'Petersen between 1845 and 1910 year',
  ),
  8,
);
assert.equal(countDigits('5 plus 6 is'), 2);
assert.equal(countDigits(''), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
