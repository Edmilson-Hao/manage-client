const loginButton = document.querySelector('#loginButton')
const signOutButton = document.querySelector('#signOutButton')
var loggedInUser

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.querySelector('login').style.display = 'none'
      document.querySelector('app').style.display = 'block'
      loggedInUser = firebase.auth().currentUser
    } else {
      document.querySelector('login').style.display = 'block'
      document.querySelector('app').style.display = 'none'
    }
});

loginButton.addEventListener('click', function () {
    document.querySelector('#loadingDiv').style.display = 'block'
    firebase.auth().signInWithRedirect(provider)
})

signOutButton.onclick = ev => {
  document.querySelector('#loadingDiv').style.display = 'block'
  setTimeout(() => {  document.querySelector('#loadingDiv').style.display = 'none'}, 1000);
  
  firebase.auth().signOut()
}