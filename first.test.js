const isDone = require('./first');

test('isDone is func', () =>{
    expect(typeof isDone).toEqual('function');
});

 test('deleting all of the whitespaces on both sides and changing N spaces to 1', () =>{
     expect(isDone('string   with    spaces    ', 'string with spaces')).toBeTruthy();
});