firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = '../../index.html'
        document.querySelector('loadingIcon').style.display = 'block'
    }
});

const loginButton = document.querySelector('#loginButton')

loginButton.addEventListener('click', function () {
    firebase.auth().signInWithRedirect(provider)
})