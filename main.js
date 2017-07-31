var form = document.forms.registration;
var username = form['registration__input_username'];
var password = form ['registration__input_password'];

function checkUserName(username) {
    var regUsername = new RegExp(/(^[0-9][a-z]{2,15}$)/, 'i');

    return regUsername.test(username.value);
}
console.log(regUsername.test);

function checkPassword (password) {
    var regPassword = new RegExp(/^(?=.*[$])(?=.*[#])[a-z0-9#$]{6,15}$/, 'i');

    return regPassword.test(password.value);
}
console.log(regPassword.test);

function test () {
       if ( regUsername.test(username.value)=== true ) {
           saveToStorage();
    } else {
        console.log("Вы ввели недопустимый символ в логине");
    }

    if (regPassword.test(password.value) === true) {
        saveToStorage();
    } else {
        console.log("Вы ввели недопустимый символ в пароле");
    }
}

function saveToStorage() {
    if (typeof (localStorage) !== 'undefined') {
        localStorage.setItem(username.value, password.value);
    } else {
        document.cookie = username.value +'='+ password.value;
    }
}

function isPresentLS() {

}
checkUserName ();
checkPassword ();
test ();
saveToStorage();

// console.log();
// console.log();
// test();