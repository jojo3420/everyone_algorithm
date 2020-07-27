

/*
* 하노이 문제 풀기
* **/

function hanoi(n, fromPos, toPos, tempPos) {
  if (n === 1) {
    console.log(`${fromPos} --> ${toPos}`);
    return;
  }

  hanoi(n-1, fromPos, tempPos, toPos);
  console.log(`${fromPos} --> ${toPos}`);
  hanoi(n-1, tempPos, toPos, fromPos);
}

console.log(hanoi(1, 1, 3, 2));
console.log(hanoi(2, 1, 3, 2));
console.log(hanoi(3, 1, 3, 2));
console.log(hanoi(4, 1, 3, 2));
