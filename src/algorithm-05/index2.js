
function sumByN (n) {
  /**
   * 1 에서 n가지의 합 구하기 with 재귀함수1
   * 유클리드 공식
   */
  return n * (n + 1) / 2;
}

console.log(sumByN(10) === 55);
console.log(sumByN(100) === 5050);



function sumN(n, initialValue= 1) {
  /**
   * 1 에서 n가지의 합 구하기 with 재귀함수2
   */
  if (initialValue === n) return n;


  return initialValue + sumN(n, initialValue + 1);
};

console.log(sumN(10) === 55);
console.log(sumN(100) === 5050);


function sumN2 (n) {
  /**
   * 1 에서 n가지의 합 구하기 with 재귀함수2
   */
  if (n === 1) return 1;
  return n + sumN2(n-1);
}

console.log(sumN2(10) === 55)
console.log(sumN2(100) === 5050)


function f1(n) {
  /**
   * n 팩토리얼 구하기1
   *  내림차순
   */
  if (n === 1) return 1;
  return n * f1(n-1);
}

console.log(f1(5) === 120); // 5*4*3*2*1
console.log(f1(6) === 720); // 6*5*4*3*2*1


function f2(n, initial=1) {
  /**
   * n 팩토리얼 구하기2
   * 오름 차순
   */
  if (initial === n ) return n;
  return initial * f2(n, initial+1);
}


console.log(f2(5) === 120)
console.log(f2(6) === 720)
