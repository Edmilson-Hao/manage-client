firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.querySelector('#loadingDiv').style.display = 'block'
        window.location.href = '../../index.html'
    }
});

const loginButton = document.querySelector('#loginButton')

loginButton.addEventListener('click', function () {
    document.querySelector('#loadingDiv').style.display = 'block'
    firebase.auth().signInWithRedirect(provider)
})