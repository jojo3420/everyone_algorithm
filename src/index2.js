

/* 1부터 n 까지의 연속한 수의 제곱의 합계 구하기
10 = 1^2 + 2^2 + 3^2 ... 9^2 + 10^2 = 385;
100 = 1^2 + 2^2 + 3^2 ... 98^2 + 99^2 + 100^2 = 338350
* */

function method1 (n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i * i;
  }
  return total;
}

console.log( method1(10));
console.log( method1(100));


function method2(n) {
  return n *(n + 1) * (2*n + 1) / 6;
}

console.log(method2(10));
console.log(method2(100));
