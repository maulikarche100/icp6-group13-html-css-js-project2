function signup() {
    var fst = document.getElementById('fst').value;
var lst = document.getElementById('lst').value;
var eml = document.getElementById('eml').value;
var pass = document.getElementById('pass').value;

var phone = document.getElementById('phone').value;


if (eml === 'email12@gmail.com' && pass === 'pass' && fst === 'mauli'&& lst === 'karche'&& phone === '7709482439'
){
alert('your account is successfully registered');

} 
else {
alert('something went is wrong.     please fill up all information properly');
}
}