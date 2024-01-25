function loopFib(seq) {
  let first = 0;
  let second = 1;
  let final = [];

  if (seq < 1) return first;

  for (let i = 1; i < seq; i++) {
    if (first === 0) {
      final.push(first);
      first = 1;
    } else {
      let temp = second;
      second = first + second;
      first = temp;
    }
    final.push(first);
  }

  console.log(final);
}

function recursiveFib(seq) {
  if (seq === 1) {
    return [0];
  } else if (seq === 2) {
    // if (seq < 2) {
    return [0, 1];
  } else {
    let arr = recursiveFib(seq - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

let num = process.argv[2];

loopFib(num);
console.log(recursiveFib(num));
