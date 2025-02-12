const caesarCipher = require('./caesarCipher');

test('shift the letters of a string by 3', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('shift the letters of a string by 3 including Uppercase', () => {
    expect(caesarCipher('heLLo', 3)).toBe('khOOr');
});

test('shift the letters of a string by 3 not including non-alphabetical', () => {
    expect(caesarCipher('hello, world!', 3)).toBe('khoor, zruog!');
});