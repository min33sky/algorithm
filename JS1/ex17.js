/**
 * 문제 17: 놀이기구 키 제한
 */

function limitHeight(height) {
  return height > 150 ? 'yes' : 'no';
}

console.log(limitHeight(160));
console.log(limitHeight(140));
