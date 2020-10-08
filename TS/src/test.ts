function backwardStringByWord(text: string) {
  // your code here
  return text
    .split(' ')
    .map((v) => v.split('').reverse().join(''))
    .join(' ');
}

console.log(backwardStringByWord('hello   world'));

console.log('abc'.split('').reverse().join(''));
