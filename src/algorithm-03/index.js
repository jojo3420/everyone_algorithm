/**
 * 동명 이인인 이름 구하기
 * input []
 * output [동명이인 이름]
 */

function duplicateName(list) {
  const result = [];
  for (let i = 0; i < list.length-1; i++) {
    for (let j = i+1; j < list.length; j++) {
      if (list[i] === list[j]) {
        result.push(list[j]);
      }
    }
  }
  return result;
}

console.log(duplicateName(['james', 'joy', 'hoon', 'james']))
console.log(duplicateName(['choi', 'joy', 'hoon', 'james']))
console.log(duplicateName(['good', 'joy', 'joy', 'james', '', 'good', 'god']))


/**
 짝을 이룰수 있는 조합 만들기
 input : ['name', 'name2', ...]
 output: [{}, {}]
 */
function myFriend(list) {
  const friends = [];

  //  배열 의 요소 중복 제거 #0
  // console.log(['j1', 'j2', 'j3', 'j4', 'j1'].filter((item, index, array) => {
  //   return array.indexOf(item) === index;
  // }));


  // 배열의 요소 중복 제거 # 1
  const newList = list.reduce((array, item) => {
    return array.includes(item) ? array : [...array, item]
  }, [])
  console.log({ newList });

  for (let i = 0; i < newList.length-1; i++) {
    for (let j = i+1; j < newList.length; j++) {
      if (list[i] !== list[j]) {
        friends.push([list[i], list[j]]);
      }
    }
  }
  return friends;
}

console.log(myFriend(['j1', 'j2', 'j3', 'j4', 'h1']));
console.log(myFriend(['j1', 'j2', 'j3', 'j4', 'j2']));


