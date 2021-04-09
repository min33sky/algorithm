const board = [
  ['A', 'C', 'B'],
  ['G', 'O', 'G'],
  ['I', 'J', 'D'],
];
const word = 'COGD';

function exists(board, word) {
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function searchDirection(x, y, subword) {
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
      return false;
    }

    if (board[x][y] !== subword[0]) {
      return false;
    }

    if (subword.length === 1) {
      return true;
    }

    board[x][y] = '.';

    for (const [i, j] of direction) {
      if (searchDirection(x + i, y + j, subword.slice(1))) {
        return true;
      }
    }

    // 원상 복구
    board[x][y] = subword[0];
    return false;
  }

  let result = false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && searchDirection(i, j, word)) {
        result = true;
        break;
      }
    }
  }

  return result;
}

console.log(exists(board, word));
