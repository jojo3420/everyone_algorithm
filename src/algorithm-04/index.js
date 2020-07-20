

// 팩토리얼 구하기 - 재귀
// 1! = 1
// 2! = 2 * 1 => 2 * 1!
// 3! = 3 * 2 * 1 => 3* 2!
// 4! = 4 * 3 * 2 * 1 => 4 * 3!
// 5! = 5 * 4 * 3 * 2 * 1 => 5 * 4!


function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n -1);
}
/*
* 1> 5 * 4!
* 2> 4 * 3!
* 3> 3 * 2!
* 4> 2 * 1!
* 5> return 2 * (1)
* 6> return 3 * (2 * 1)
* 7> return 4 * (3 * 2 * 1)
* 8> return 5 * (4 * 3 * 2 * 1)
* */


console.log(factorial(5) === 120);
console.log(factorial(10) === 3628800);
