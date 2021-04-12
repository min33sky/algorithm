let input_value = 'Abbc,c bb.A';

function isPalindrome1(str) {
  let left = 0;
  let right = str.length - 1;

  // 소문자로 변경
  str = str.toLowerCase();

  while (left < right) {
    while (left < right) {
      // 숫자와 문자가 아닐 경우에는 다음 요소로 넘어간다.
      if (/^[a-z0-9]+/i.test(str[left])) {
        break;
      }
      left += 1;
    }

    while (left < right) {
      if (/^[a-z0-9]+/i.test(str[right])) {
        break;
      }
      right -= 1;
    }

    if (str[left] !== str[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
}

console.log(isPalindrome1(input_value));

// 숫자, 문자만 빼고 제거 후 팰린드롭 확인하기

function isPalindrome2(strs) {
  strs = strs.replace(/[^a-zA-Z0-9]/g, '');
  return strs === [...strs].reverse().join('');
}

console.log(isPalindrome2(input_value));
