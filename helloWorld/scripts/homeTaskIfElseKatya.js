document.addEventListener('DOMContentLoaded', function(){
    let object = {
        name: 'Aloy',
        password: '684339',
        age: 18
    };
    if (object.name.length > 2 && object.password.length >=3 && object.password.length <=8 && object.age >= 18 && object.age != isNaN()) {

       console.log('validUser');
    }
    else {
        console.log('inValid');
    }
});