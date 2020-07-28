function gcd1(num1, num2) {
  /*
  * 두 수의 최대 공약수 구하기
  * */
  let r;
  let min = num1;
  if (min > num2) min = num2;
  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      r = i;
    }
  }
  return r;
}

console.log(gcd1(10, 20));
console.log(gcd1(2, 7));
console.log(gcd1(21, 14));


function gcd2(num1, num2) {
// book solution
// * 두 수의 최대 공약수 구하기
  let min = num1;
  if (min > num2) min = num2;

  while (min > 0) {
    if (num1 % min === 0 && num2 % min === 0) {
      return min;
    }
    min--;
  }
}


console.log(gcd2(10, 20));
console.log(gcd2(2, 7));
console.log(gcd2(21, 14));


function gcd3(num1, num2) {
  /**
   * 유클리드 알고리즘 - 최대 공약수
   *
   *
   규칙-1:
   어떤수 a와 b의 최대 공약수는 'b'와 'a 를 b 로 나눈 나머지' 의 최대 공약수와 같다.
   즉 gcd(a, b) = gcd(b, a % b)

   규칙-2
   어떤수(n)과 0의 최대 공약수는 어떤 수(n)이다.
   gcd(n, 0) = gcd(n)
   * @param num1
   * @param num2
   * @return {undefined|*}
   */

  // 종료 조건
  if (num2 === 0) return num1;

  return gcd2(num2, num1 % num2)
}

console.log(gcd3(10, 20));
console.log(gcd3(2, 7));
console.log(gcd3(21, 14));


// n번째 fibonacci 수 구하기
//  1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fibonacci(n) {
  const list = [];
  let prev = 0, next = 1;
  while (n >= 1) {
    const value = next;
    next += prev;
    prev = value;
    list.push(value);
    n = n - 1;
  }
  return list[list.length - 1];
}

console.log(fibonacci(6) === 8);


// n번째 fibonacci 수 구하기 with 재귀함수
//  1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// n번째 피보나치: (n- 1번째 값) + (n - 2번째 값)
// 7 번째 파보나치 수는 = 13이고
// 13은 5 + 8 의 합이다.

function nFibonacci(n, list = [1, 1]) {
  // 종료 조건
  if (list.length === n) return list[n - 1];
  // next 피보나치 구하기
  list.push(list[list.length - 2] + list[list.length - 1]);
  return nFibonacci(n, list);
}


console.log(nFibonacci(5) === 5);
console.log(nFibonacci(8) === 21);
console.log(nFibonacci(9) === 34);


function fibo(n) {
  /**
   * book solution
   * 1, 1, 2, 3, 5, 8, 13, 21, 34 ....
   */
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(7) === 13);
console.log(fibo(1) === 1);
console.log(fibo(2) === 1);
console.log(fibo(3) === 2);
console.log(fibo(4) === 3);
console.log(fibo(9) === 34);
