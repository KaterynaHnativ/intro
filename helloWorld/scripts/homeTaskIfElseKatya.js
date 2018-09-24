document.addEventListener('DOMContentLoaded', function(){
    let object = {
        name: 'Al',
        password: '',
        age: 18
    };
    
    // if (object.name.length > 2 && object.password.length >=3 && object.password.length <=8 && object.age >= 18 && object.age != isNaN()) {
    //    console.log('validUser');
    // }
    // else {
    //     console.log('inValid');
    // }

    let isValid = true;
    let invalidMessage = [];

    if (object.name.length <= 2) {
        isValid = false;
        invalidMessage.push('User name too short');
    }

    if (object.password.length < 2){
        isValid = false;
        invalidMessage.push('Password name too short');
    }

    if (object.password.length > 8){
        isValid = false;
        invalidMessage.push('Password name too long');
    }

    if (object.age < 18){
        isValid = false;
        invalidMessage.push('You are too young');
    }

    if (isNaN(object.age)){
        isValid = false;
        invalidMessage.push('Prompt number!');
    }

    console.log('isValid: ', isValid);
    console.log(invalidMessage);

});