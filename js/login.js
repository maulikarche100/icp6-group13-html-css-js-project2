
function signin() {
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;


if (email === 'email@' && password === 'password') {
alert('Login successful!');

} else {
alert('Invalid username or password. Please try again.');
}
}
