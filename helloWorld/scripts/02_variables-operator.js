document.addEventListener('DOMContentLoaded', function(){
    console.log("lesson number 2")
    let a = 1;
    let b = 2;
    let res = a + b;
    // res = res + 10;
    res += 10;
    res++;
    res--;
    console.log('res == ', res);

    //example increment:
    const nums = [1,2,3,4,5];
    console.log(nums)
    for(let i = 0; i < nums.length; i++){
        console.log('index: ', i, 'defs: ', nums[i]);
    }

    let str = typeof 'whatever';
    console.log(str);
    let xNum = 1;
    let xStr = '1';

    let booleanRes = xNum == xStr;
    console.log('unstrict: ', booleanRes);
    console.log('wtf!? ', xNum + xStr);
    booleanRes = xNum === xStr;
    console.log('strict: ', booleanRes);

    booleanRes = xNum !== 'string'; // true
    console.log("xNum !== 'string'", booleanRes);
    booleanRes = xNum != '1'; // false
    console.log("xNum !== '1'", booleanRes);
    booleanRes = 1 > 2; //false
    console.log('1 > 2', booleanRes);  
    
    let user;
    console.log('user: ', user);
    if(!user){
        user = 'UserName';
    }
    console.log('user: ', user);
    let nullVar = null;
    if(!nullVar){
        console.log('nullVar is false');
    }

    let undefinedVar = undefined;
    if(!undefinedVar){
        console.log('undefinedVar is false');
    }

    let falsedVar = false;
    if(!falsedVar){
        console.log('falsedVar is false');
    }

    let zeroVar = 0;
    if(!zeroVar){
        console.log('zeroVar is false');
    }else {
        console.log('zeroVar is not false');
    }

    console.log('infinity: ', Infinity);
    console.log('isFinite: ', isFinite);

    let userName = 'Tom';
    let userPassword = 'qwerty123456';

    let backupUserName = 'Tom';
    let backupUserPassword = 'zxcAsd$'
    //Log In:
    if(userName === backupUserName && userPassword === backupUserPassword){
        console.log('Succsessfully');
    } else{
        console.log('Go and fuxk yourself, stuped amimal!');
    };

    let sam = 'male';
    let alice = 'femele';
    let tom = 'transgender';

    if(sam === 'male' || sam === 'female'){
        console.log('Very good, ' + sam + '!');
    } else{
        console.log('Go and fuxk yourself, stuped amimal!');
    };

    if(tom === 'male' || tom === 'female'){
        console.log('Very good!' + tom + '!');
    } else{
        console.log('Go and fuxk yourself, stuped amimal!');
    };
});