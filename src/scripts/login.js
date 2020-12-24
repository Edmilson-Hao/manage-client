firebase.auth().onAuthStateChanged(function (user){
    if (user) window.location.href = './home.html';
});

var loginButton = document.querySelector('#loginButton');

loginButton.addEventListener('click', () => {
    firebase.auth().signInWithRedirect(provider)
});