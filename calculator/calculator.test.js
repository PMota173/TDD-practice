const calculator = require('./calculator');

test('add 1 + 2 to equal 3', () => {
    expect(calculator().add(1, 2)).toBe(3);
})

test('subtract 5 - 2 to equal 3', () => {
    expect(calculator().subtract(5, 2)).toBe(3);
});

test('multiply 2 * 3 to equal 6', () => {
    expect(calculator().multiply(2, 3)).toBe(6);
});

test('divide 6 / 2 to equal 3', () => {
    expect(calculator().divide(6, 2)).toBe(3);
});
