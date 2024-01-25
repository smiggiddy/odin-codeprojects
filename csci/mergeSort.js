function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let half = Math.round(arr.length / 2);
    let leftSide = mergeSort(arr.slice(0, half));
    let rightSide = mergeSort(arr.slice(half, arr.length));

    let newArr = mergeArray(leftSide, rightSide);

    return newArr;
  }
}

function mergeArray(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}
let testCaseOne = [2, 1, 3, 9, 4, 5, 23, 10];

let testCaseTWo = [23, 5, 3, 1, 8, 7, 2, 4];
console.log(`Test Case No1: ${testCaseOne}`);
console.log(mergeSort(testCaseOne));
console.log(`Test Case No2: ${testCaseTWo}`);
console.log(mergeSort(testCaseTWo));
