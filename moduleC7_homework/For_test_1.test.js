const sum = require('./For_test_1');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});