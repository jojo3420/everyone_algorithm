

/**
 *  배열에서 입력한 수의 위치(index) 리턴하기
 *  없으면 -1
 * @param list
 * @param x
 */
function findIndex(list, x) {
  for (let i = 0; i < list.length; i++) {
    if (x === list[i]) return i;
  }
  return -1;
}

console.log(findIndex([2, 5, 1, 2], 5) === 1)
console.log(findIndex([2, 5, 1, 2], 1) === 2);
console.log(findIndex([29, 51, 19, 20, 1], 20) === 3);
console.log([1, 2, 9, 4, 2, 1].findIndex(n => n === 9) === 2)



/**
 * 배열에서 입력한 수의 위치 배열 리턴하기
 * ex) [1, 4, 2, 9, 1] ==> [0, 4]
 * @param list
 * @param x
 * @return {[]}
 */
function findIndexBy(list, x) {
  const r = [];
  for (let i = 0; i < list.length; i++) {
    if (x === list[i]) r.push(i);
  }
  return r;
}

console.log(findIndexBy([1, 4, 2, 9, 1], 1)); // [0, 4]
console.log(findIndexBy([1, 4, 2, 9, 0], 9)); // [3]


/**
 순차 정렬 기법으로 배열을 정렬한다.
 Order by ASC
 */

function sortByASC(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i+1; j < list.length; j++) {
      if (list[i] > list[j]) {
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}

console.log(sortByASC([5, 2, 9, 1, 6]));
console.log(sortByASC([2, 1, 4, 55, 86, 9, 6, 0]));





/**
 순차 정렬 기법으로 배열을 정렬한다.
 Order by DESC
 */


function sortByDESC(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i+1; j < list.length; j++) {
      if (list[i] < list[j]) {
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}

console.log(sortByDESC([5, 2, 9, 1, 6]));
console.log(sortByDESC([2, 1, 4, 55, 86, 9, 6, 0]));


/**
 * 순차 정렬을 이용하여 특정 아이디 이름 찾기
 * @param list1: 아이디 배열
 * @param list2: 아이디에 대한 이름 배열
 * @param id: 찾을 아이디
 * @return {number|*}
 */
function getNameById(list1, list2, id) {
  for (let i = 0; i < list1.length -1; i++) {
    if (list1[i] === id) return list2[i];
  }

  return -1;
}

const list1 = [111, 222, 333, 444];
const list2 = ['aaa', 'bbb', 'ccc', 'ddd'];
console.log(getNameById(list1, list2, 333) === 'ccc');
console.log(getNameById(list1, list2, 555) === -1);


