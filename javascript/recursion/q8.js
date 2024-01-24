function SumSquares(arr) {
  let sum = 0;

  if (arr.length === 0) return 0;

  let first = arr.shift();

  if (Number.isInteger(first)) {
    sum = first * first;
  } else if (Array.isArray(first)) {
    sum += SumSquares(first);
  }

  return (sum += SumSquares(arr));
}

var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
