
/*
 주어진 배열 에서 최대값 구하기
* */

function findMax(list) {
  let max = list[0];
  for (let i = 1; i < list.length; i++) {
    if (max < list[i]) {
      max = list[i];
    }
  }
  return max;
}

console.log(findMax(
  [1, 45, 2, 12, 315, 12, 0, 123, 5, 122, 200]) === 315);
console.log(findMax(
  [1, 145, 2, 12, 15, 12, 10, 1123, 5, 5122, 200]) === 5122);
console.log(findMax(
  [1, 2, 10, 4, 5]) === 10);


/*
* 배열안의 최대 값의 index 찾기
* */

function findMaxIndex(list) {
  let index = 0;
  for (let i = 1; i < list.length; i++) {
    if (list[index] < list[i]) {
      index = i;
    }
  }
  return index;
}

console.log(findMaxIndex([1, 5, 2, 9, 4]) === 3);
console.log(findMaxIndex([1, 52, 2, 1, 22]) === 1);
console.log(findMaxIndex([1, 52, 2, 1, 21, 24, 11, 99, 10]) === 7);
