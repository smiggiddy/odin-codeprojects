import {
    analyzeArray,
    ceaserCipher,
    calculator,
    reverseString,
    capitalize,
} from './odinTests';

test('make sure mike = Mike', () => {
    expect(capitalize('mike')).toBe('Mike');
});

test('make sure mike = ekim', () => {
    expect(reverseString('mike')).toBe('ekim');
});

test('Make sure calculator works', () => {
    expect(calculator(1, 2, '+')).toBe(3);
    expect(calculator(1, 2, '-')).toBe(-1);
    expect(calculator(1, 2, '*')).toBe(2);
    expect(calculator(1, 0, '/')).toBe('error');
    expect(calculator(1, 2, '/')).toBe(0.5);
    expect(ceaserCipher('bob')).toBe('ere');
    expect(analyzeArray([1, 2, 3, 4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4,
    });
});
