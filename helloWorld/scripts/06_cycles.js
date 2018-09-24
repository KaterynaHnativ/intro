document.addEventListener('DOMContentLoaded', function(){
    let animals = ['cat', 'pig', 'dog', 'Tom'];
    let animalList = document.getElementById('animal-list');
    console.log(animalList);

    for(let i = 0; i < animals.length; i++) {
        let li = document.createElement('li');
        console.log('[' + i + '] ' + animals[i]);
        li.innerHTML = animals[i];
        animalList.appendChild(li);
    }

    let users = ['Tom', 'Sam', 'Alice'];
    for (let user of users) {
        console.log(user);
    }

    // let years = 0;
    // while (years < 18) {
    //     years = prompt('Сколько вам лет?', 0);
    //     console.log('Permission dened')
    // }

    let years = 20;
    do {
        years = prompt('Сколько вам лет?', 0);
        console.log('Permission dened')
    } while (years < 18)

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

   let drivers = [
    {
        name: 'Sam',
        phone: '151515',
        adress: {
            city: 'Rivne',
            street: 'Soborna'
        }
    },
    {
        name: 'John',
        phone: '565656',
        adress: {
            city: 'Kyiv',
            street: 'Solomon'
        }
    },
    {
        name: 'Sasha',
        phone: '464646',
        adress: {
            city: 'Ternopil',
            street: 'Sheva'
        }
    },
    {
        name: 'Lida',
        phone: '474747',
        adress: {
            city: 'Rivvne',
            street: 'Olga'
        }
    },
    {
        name: 'David',
        phone: '787878',
        adress: {
            city: 'Kyiv',
            street: 'Fuck'
        }
    }
   ]
});