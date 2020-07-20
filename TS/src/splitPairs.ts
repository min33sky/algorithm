import assert from 'assert';

function splitPairs(text: string): string[] {
  let result = [];

  for (let i = 0; i < text.length; i += 2) {
    result.push(text[i].concat(text[i + 1] ? text[i + 1] : '_'));
  }
  return result;
}

console.log('Example:');
console.log(splitPairs('abcd'));

// These "asserts" are used for self-checking
assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert.deepEqual(splitPairs('a'), ['a_']);
assert.deepEqual(splitPairs(''), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
