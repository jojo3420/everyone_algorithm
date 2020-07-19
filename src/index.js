
/* 1부터 n 까지의 합 구하기

ex)
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
1 ~ 10 =  1 + 10, 2+ 9, 3+ 8 , 4+7, 5+6 = 55

1, 2, 3, ... 98, 99, 100
1 ~ 100 = 1+100, 2 + 99, 3+ 98, 4 + 97 ... 49+51
, 1000 의  */


// 방법1: simple
function calcSum(n) {
  console.time('case1');
  const r = (n + 1) * (n / 2);
  console.timeEnd('case1');
  return r;
}

// 방법2 - 성능 이슈 있음.
function calcSum2(n) {
  console.time('case2');

  let result  = 0;
  for (let i = 1; i <= n; i++) {
    result+= i;
  }
  console.timeEnd('case2');

  return result;
}


console.log(calcSum(10));
console.log(calcSum(100));
console.log(calcSum(1000));
console.log(calcSum(1000000));
console.log('-------------------------------------------')
console.log(calcSum2(10));
console.log(calcSum2(100));
console.log(calcSum2(1000));
console.log(calcSum2(1000000));
