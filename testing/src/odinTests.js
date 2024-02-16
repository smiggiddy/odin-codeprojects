const capitalize = (thing) => thing.charAt(0).toUpperCase() + thing.slice(1);
const reverseString = (thing) => thing.split('').reverse().join('');
const calculator = (a, b, operation) => {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'error';
            }
            return a / b;
    }
};

const ceaserCipher = (thing) => {
    let cipher = thing.split('').map((item) => {
        let charCode = item.charCodeAt(0);
        return String.fromCharCode(charCode + 3);
    });

    return cipher.join('');
};

const analyzeArray = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    let avg = arr.reduce((sum, num) => sum + num, 0) / length;

    return {
        average: avg,
        min: min,
        max: max,
        length: length,
    };
};

export { analyzeArray, ceaserCipher, calculator, capitalize, reverseString };
