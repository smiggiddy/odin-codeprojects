let seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

function totalIntegers(arr) {
  let total = 0;

  if (arr.length === 0) return 0;

  if (typeof arr !== "number") {
    let numb = arr.shift();

    if (typeof numb === "number") {
      total += 1;
    } else if (Array.isArray(numb)) {
      total += totalIntegers(numb);
    }
  }
  return (total += totalIntegers(arr));
}

console.log(seven);
