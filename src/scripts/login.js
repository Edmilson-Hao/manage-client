firebase.auth().onAuthStateChanged(function (user){
    if (user) document.querySelector('.loading').style.display = 'block';
    if (user) window.location.href = './home.html';    
});

var loginButton = document.querySelector('#loginButton');

loginButton.addEventListener('click', () => {
    document.querySelector('.loading').style.display = 'block';
    firebase.auth().signInWithRedirect(provider);
});