document.addEventListener('DOMContentLoaded', function(){
    let num = '1';
    console.log( 2 + num);
    num = parseInt(num);
    console.log( 2 + num);
    num2 ='1';

    let result;
    result = parseInt(num) + parseInt(num2);
    console.log(result);
    let number1 = "46.07";
    let number2 = "4.98";
    result = parseFloat(number1) + parseFloat(number2);
    console.log(result); //51.05
    result = parseInt(number1) + parseInt(number2);
    console.log(result);

    result = +number1;
    console.log(typeof result, ' ', result);
    result = result + '';
    console.log(typeof result, ' ', result);
    result = 10;
    result = result.toString();
    console.log(typeof result, ' ', result);

    num = "javascript";
    num2 = "22";
    result = isNaN(num);
    console.log('!@#:',result);
    console.log(isNaN(num2));

    if(!isNaN(num2)){
        console.log(num2 * num2);
    }

    console.log(num2 * num);
    console.log('isNaN(NaN):', isNaN(NaN));

    function multiple(){
        let textboxMultiple = document.getElementById('textboxMultiple');
        console.log('wtf! ', textboxMultiple.value);
        console.log(typeof textboxMultiple.value, isNaN(textboxMultiple.value));
        //Task: multiple or display error message in H1
        let res = textboxMultiple.value * textboxMultiple.value;
        if(!isNaN(textboxMultiple.value)){
            res = textboxMultiple.value * 2;
        } else {
            res = 'unsuccessfully';
        }
            
        document.getElementById('result').innerHTML = typeof res + ': ' + res;
    };

    document.getElementById('resultBtn').addEventListener('click', multiple);
});