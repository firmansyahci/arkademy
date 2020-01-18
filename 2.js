function usernameValidity(user){
    const regex = /^[a-z][a-zA-Z0-9_]{5,12}$/;
    return regex.test(user);
}
function passwordValidity(pass){
    const regex = /[0-9]{1}[A-Z]{5}[^a-zA-Z0-9]{1}$/;
    return regex.test(pass);
}
console.log(usernameValidity("fiona_mareta"));
console.log(usernameValidity("fionamareta99"));
console.log(usernameValidity("FIONA-mareta"));
console.log(passwordValidity("1WORLD!"));