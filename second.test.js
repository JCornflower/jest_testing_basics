const slice = require('./second');
console.log(slice);

test('is function', () => {
    expect(typeof(slice)).toBe('function');
});

test('text is really sliced', () => {
    expect(slice('string', 3)).toEqual('str...');
});

test('text is really sliced', () => {
    expect(slice('', 3)).toEqual('');
});

test('text is really sliced', () => {
    expect(slice('string', 7)).toEqual('string');
});