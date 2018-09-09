document.addEventListener('DOMContentLoaded', function(){
    //read: https://metanit.com/web/javascript/2.1.php and   https://metanit.com/web/javascript/2.2.php and https://metanit.com/web/javascript/2.3.php
    let revisionStage;
    console.warn(revisionStage);
    revisionStage = 'pending';
    console.log(revisionStage);
    revisionStage = 'banned';
    console.log(revisionStage);

    console.log(globalVar);

    console.log(document);
    document.getElementById('p1').innerHTML = 'This is paragraf 1';
    
    // Uncaught SyntaxError: Identifier 'revisionStage' has already been declared
    // var revisionStage = 1;
    // console.log(revisionStage);

    const PI = 3.14;
    console.log('PI: ', PI + '!');
    // Uncaught TypeError: Assignment to constant variable
    // PI = 10; 

     let foo = function () {
        let x = 1;
        console.log(x);
        console.log('foo ', revisionStage);
        let innerFoo = function() {
            let x = 2;
            console.log(x);
            console.log('innerFoo ', revisionStage);
        }();
        console.log(x);
    }();

    // Uncaught ReferenceError: x is not defined
    // let foo2 = function () {
    //     console.log('!!!', x);
    // }();

    // Uncaught ReferenceError: notValidVar is not defined
    // console.log(notValidVar);
    // let notValidVar = '!!!';

    let string = 'String';
    string = 'Another String';
    console.log(string);
    let id ='2891212304';
    console.log('We can\'t do math operaton with id');

    let number = 0;
    number = 0.1;

    let boolean = true;
    boolean = false;
    // all variables can be null and undefined
    boolean = undefined;
    boolean = null;

    let undef;
    if (undef === undefined){
        console.log('variable undef: ', undef);
    }

    let testQuotationMark = '\'Test\' Quotation Mark';
    console.log(testQuotationMark);

    let user = {
        login: 'Tom',
        email: 'tom@gmail.com',
        password: 'qwert123',
        age: 18
    };
    console.log(user);
    console.log(user.email);

    console.log('js is weak in types: (1 + \'1\') == ', 1 + '1');
    var xNumber = 45;  // тип number
    var yNumber = xNumber + 5;
    console.log(yNumber); // 50
        
    xNumber = '45'; // тип string
    console.log('typeof xNumber: ', typeof xNumber);
    if (typeof xNumber === 'number'){
        var zNumber = xNumber + 5;
        console.log(zNumber);
    } else {
        console.log('xNumber is not type of number');
    }
});