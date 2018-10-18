const isAnagram = require('./anagram');

test('isAnagram func exist', ()=>{
    expect(typeof isAnagram).toEqual('function');
}
);

test('cinema is anagram to iceman', ()=>{
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('dormitory is anagram of dirty room##', ()=>{
    expect(isAnagram('dormitory', 'dirty room##')).toBeTruthy();
});

test('hello is not an anagram of aloha', ()=>{
    expect(isAnagram('Hello', 'aloha')).toBeFalsy();
});