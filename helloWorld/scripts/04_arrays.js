document.addEventListener('DOMContentLoaded', function(){
    let user = 'Tom';
    let user2 = 'Alice';

    let users = ['Sid', 'Bob', 'Nancy', 'Pit'];
    console.log(users, users.length); 
    console.log(users[2]);
    users[2] = user;
    console.log(users[2]);

    let users2 = ['Oleg', 'Katya', 'Katya'];
    // users = users2;
    // console.log('users: ', users);
    // console.log('users2: ', users2);

    console.log(...users);
    console.log(user[10]);
    users[4] = 'No Name'
    console.log(users);
    users.push('No Surname');
    console.log(users);
    users.push(users2);
    console.log(users);
    let popped = users.pop();
    console.log(users);
    console.log('popped: ', popped);
    let shifted = users.shift();
    console.log('users: ', users, ' shifted: ', shifted);
    delete users[0];
    console.log(users);

    console.log(' ***** Value type and reference type *****');
    let a = 10;
    let b = 20;
    b = a;
    b++;
    console.log('a: ', a, ' b: ', b);

    let arr = [10, 20, 30];
    let arr2 = [90, 80, 70, 60];
    arr2 = arr;
    arr2.push('Tom');
    console.log('arr: ', arr, ' arr2: ', arr2);

    users = ['Sid', 'Bob', 'Nancy', 'Pit'];
    users2 = ['Oleg', 'Katya', 'Katya'];
    users += users2;
    console.log(typeof users, users);

    arr = [10, 20, 30];
    arr2 = [90, 80, 70, 60];
    let concatedArr = arr.concat(arr2);
    console.log(typeof concatedArr, concatedArr);

    let katya = {
        name: 'Katya',
        phone: '987987'
    };
    let phoneBook = [katya, {name: 'Tom', phone: '394820'}, {name: 'Bob', phone: '401867'}];
    console.log(phoneBook);
    let animal = 'once upon a time';
    phoneBook.push(animal);
    animal = 'katya';
    katya.phone = null;
    console.log(animal, katya, phoneBook);
    phoneBook[0].phone = '121212';
    console.log(animal, katya, phoneBook);

    let cars = [
        {
            color: 'red',
            model: 'renault',
            speed: '120',
            adressDepo: {
                city: 'Kyiv',
                street: 'Shevchenka'
            }
        },
        {
            color: 'blue',
            model: 'toyota',
            speed: '160',
            adressDepo: {
                city: 'Rivne',
                street: 'Myru'
            }
        },
        {
            color: 'yellow',
            model: 'deo',
            speed: '110',
            adressDepo: {
                city: 'Ternopil',
                street: 'Bila'
            }
        },
        {
            color: 'black',
            model: 'audi',
            speed: '180',
            adressDepo: {
                city: 'Rivne',
                street: 'Vidinska'
            }
        },
        {
            color: 'white',
            model: 'audi',
            speed: '160',
            adressDepo: {
                city: 'Kyiv',
                street: 'Mayak'
            }
        }
    ];
});