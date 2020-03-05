/**
 * 문제 45: getTime() 사용하기
 */

const time = new Date().getTime();
console.log(Math.floor(time / (60 * 60 * 24 * 365 * 1000)) + 1970);
