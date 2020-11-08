const saveUser = require('./For_test_3');

test("",() => {
    expect(saveUser('Иван', 'Иванов')).toBe("Твоё имя: Иван Твоя фамилия: Иванов");
});
