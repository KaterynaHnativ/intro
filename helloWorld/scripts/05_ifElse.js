document.addEventListener('DOMContentLoaded', function(){
    let user = {
        name: null,
        id: null
    };

    if (user.id === null) {
        console.log('user doesn\'t exist');
    }

    user = null;
    let userMsg = (user) ? 'user exists' : 'user does not exist';
    console.log(userMsg);  
});