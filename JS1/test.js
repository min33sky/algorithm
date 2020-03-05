const nationWidth = {
  korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

// const arr = Object.keys(nationWidth).map(v => [v, nationWidth[v]]);
// console.log(arr);

// const sortArr = arr.sort((a, b) => a[1] - b[1]);
// console.log(sortArr);

// ! Object.entries => es2017부터 사용가능
console.log(Object.entries(nationWidth));
