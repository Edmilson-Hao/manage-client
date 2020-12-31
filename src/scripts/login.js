const loginButton = document.querySelector('#loginButton')

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.querySelector('login').style.display = 'none'
      document.querySelector('app').style.display = 'block'
    } else {
      // No user is signed in.
    }
});

loginButton.addEventListener('click', function () {
    document.querySelector('#loadingDiv').style.display = 'block'
    firebase.auth().signInWithRedirect(provider)
    document.querySelector('app').style.display = 'block'
})