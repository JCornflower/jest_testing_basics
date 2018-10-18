const axios = require('axios');
const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {
            firstName: 'Valyushka',
            lastName: 'Koval'
        }
        return user;
    },
    fetchuser: () => 
    axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data)
        .catch(err => 'error')
};

module.exports = functions;

