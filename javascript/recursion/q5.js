let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
            else: "fool",
            here: "fo",
            nested: {
              again: "bob",
              nestedNested: {
                free: "beer",
                boozy: "chicks",
              },
            },
          },
        },
      },
    },
  },
};

function contains(obj, searchValue) {
  if (Object.keys(obj).length === 0) {
    return false;
  }
  let temp = { ...obj };
  let keys = Object.keys(temp);
  let key = keys.shift();

  if (typeof obj[key] === "object") {
    return contains(obj[key], searchValue);
  }

  if (obj[key] === searchValue) {
    return true;
  } else {
    if (keys.length >= 1) {
      function checkValues(object, keys, searchValue) {
        if (keys.length < 1) return false;
        let temp = keys.shift();
        if (object[temp] === searchValue) return true;
        if (typeof object[temp] === "object") {
          return contains(object[temp], searchValue);
        }
        return checkValues(object, keys, searchValue);
      }
      return checkValues(obj, keys, searchValue);
    }
    return contains(obj, searchValue);
  }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
let doesntHaveItEither = contains(nestedObject, "chicks"); // true

console.log(hasIt, doesntHaveIt, doesntHaveItEither);

function chatgptContains(obj, searchValue) {
  const keys = Object.keys(obj);

  const checkKeys = (keys) => {
    if (keys.length === 0) {
      return false;
    }

    const key = keys.shift();

    if (obj[key] === searchValue) {
      return true;
    }

    if (
      typeof obj[key] === "object" &&
      chatgptContains(obj[key], searchValue)
    ) {
      return true;
    }

    return checkKeys(keys);
  };

  return checkKeys(keys);
}

let chatgptHasIt = chatgptContains(nestedObject, 44); // true
let chatgptDoesntHaveIt = chatgptContains(nestedObject, "foo"); // false
let chatgptDoesntHaveItEither = chatgptContains(nestedObject, "chicks"); // true

console.log(chatgptHasIt, chatgptDoesntHaveIt, chatgptDoesntHaveItEither);
