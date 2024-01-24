function replicate(multiple, number) {
  if (multiple <= 0) return [];

  // let arr = [];

  // original and too long
  // if (multiple >= 1) {
  //   arr.push(number);
  // } else {
  //   arr.push(replicate(multiple - 1), number);
  // }
  // const concated = arr.concat(replicate(multiple - 1, number));
  // return concated;
  return [number].concat(replicate(multiple - 1, number));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
console.log(replicate(60, 30));
