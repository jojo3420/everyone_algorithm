

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


// 1 부터의 n 까지의 합 구하기 with 재귀함수
function calcSum(n) {
  if (n <= 1) return 1;
  return n + calcSum(n-1);
}

console.log(calcSum(10) === 55);
console.log(calcSum(100) === 5050);


// 배열 값 중에 최고값 구하기 with 재귀 함수
function getMax(list, index, max) {
  if (index === list.length) return max;

  if (max < list[index]) {
    max = list[index];
  }

  return getMax(list, index+1, max);
}


console.log(getMax([1, 2, 5, 10, 3, 9], 0, 0) === 10);
console.log(getMax([4, 110, 220, 1, 5, 3, 9], 0, 0) === 220);
console.log(getMax([4, 1, 6, 1, 5, 3, 9], 0, 0) === 9);
