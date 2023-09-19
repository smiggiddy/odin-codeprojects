let add7 = (number) => {
    sum = number + 7;
    console.log(sum);
}

add7(2);


function multiply(x, y) {
    console.log(x * y);
}

multiply(5,5);

let capitalize = (word) => {
    // if (word != String) {
    //     console.log("Need a string")
    // }
    str_len = word.length
    console.log(word[0].toUpperCase()+word.slice(1,str_len))

}

let test = testing => {
    console.log(testing)
}

let lastLetter = word => { console.log(word[word.length - 1])}

capitalize("bob")
capitalize("UPPER")
capitalize("tHiS Is Mixed")
test("Hello, there!")

lastLetter("DeeZ")


let fizzBuss = number => {
    if (number % 5 == 0 && number % 3 == 0) {
        console.log("FizzBuzz")
    } else if (number % 3 == 0) {
        console.log("Fizz")
    } else if (number % 5 == 0) {
        console.log("Buzz")
    }
}


fizzBuss(10)
fizzBuss(15)
fizzBuss(9)
fizzBuss(4)
fizzBuss(900)