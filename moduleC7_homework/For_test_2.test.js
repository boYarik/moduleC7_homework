const finnobaci = require('./For_test_2');

test("",() => {
    expect(finnobaci(1, 2, 3)).toBe(5);
});

test("",() => {
    expect(finnobaci(1, 2, 10)).toBe(144);
});