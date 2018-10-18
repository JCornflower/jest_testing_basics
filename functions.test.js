const functions = require('./functions');

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());
const nameCheck = () => console.log('Checking Name...')

describe('Checking Names', () =>{
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff')
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen')
    });
});

const initDatabase = () => console.log('Database initialized...');
const closeDatabase = () => console.log('Database Closed...');

test('Adds 2+2 to equal 4', () =>{
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2+2 to NOT equal 5', () =>{
    expect(functions.add(2, 2)).not.toBe(5);
});

//CHECK t&f values
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined -> opposite to undefined
//toBeTruthy -> if statement traats as true
//tobefalsy -> if dtatement treats as false

test('Should be Null', () =>{
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () =>{ //true
    expect(functions.checkValue(null)).toBeFalsy(); //or undefined
});

//toEqual
test('user should be as described', () =>{
    expect(functions.createUser()).toEqual({firstName: 'Valyushka', lastName: 'Koval'}); 
});

//tess than /grater than
test('should be under 1600', () =>{ 
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600); 
});

//regExp
test('there is no I in Team', () => {
    expect('team').not.toMatch(/I/i);
});

//Arrays
test('admin should be in username', () =>{
    usernames = ['john', 'karen',  'admin'];
    expect(usernames).toContain('admin');
});

//working with async data
//promise
// test('user fetched name should be Leanne Graham', () =>{
//     expect.assertions(1);
//     return functions.fetchuser()
//         .then(data =>{
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });


//async await
test('user fetched name should be Leanne Graham', async() =>{
    expect.assertions(1);
    const data = await functions.fetchuser();
    expect(data.name).toEqual('Leanne Graham');
});

