let reg = /[^aA]{6,}/;
console.log("qwertAqweas56,!@fghjfgAqwerty123".match(reg));



var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function filter(users) {
    let reg = /[a-zA-Z0-9]+([.]?[a-zA-Z0-9]+)?(@gmail.com|@yahoo.com)/;
    let result = [];
    for (let i in users) {
        let user = users[i];
        if(user.email.match(reg)) {
            result.push(user);
        }
    }
    return result;
}

console.log(filter(arr));
