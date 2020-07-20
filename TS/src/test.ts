let str = 'abcde';

let result = [];

for (let i = 0; i < str.length; i++) {
  if (i % 2 !== 0) continue;
  result.push(str[i].concat(str[i + 1] ? str[i + 1] : '_'));
}

console.log(result);
