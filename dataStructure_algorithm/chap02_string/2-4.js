const input_value = ['eat', 'repaid', 'paired', 'tea', 'bat'];

// 방법 1)

function groupAnagram1(strs) {
  hashmap = new Map();

  for (const item of strs) {
    let sorted = [...item].sort().join('');

    if (hashmap.has(sorted)) {
      hashmap.get(sorted).push(item);
    } else {
      hashmap.set(sorted, []);
      hashmap.get(sorted).push(item);
    }
  }

  return hashmap.values();
}

console.log(groupAnagram1(input_value));

// 방법 2)

function groupAnagram2(strs) {
  hashmap = new Map();

  for (const item of strs) {
    const arr = Array(26).fill(0);

    for (const char of item) {
      // 아스키 코드 값을 이용
      arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    // ? 키가 배열일 경우 배열 요소가 같아도 주소가 다르기 때문에 동등 비교가 불가능
    const key = arr.toString();

    if (hashmap.has(key)) {
      hashmap.get(key).push(item);
    } else {
      hashmap.set(key, []);
      hashmap.get(key).push(item);
    }
  }

  return hashmap.values();
}

console.log(groupAnagram2(input_value));
