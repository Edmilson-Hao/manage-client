firebase.auth().onAuthStateChanged(function (user){
    if(user) console.log(user)
    else console.log(`Not Logged In: ${user}`)
});

logOut = () => {
    firebase.auth().signOut()
}

logIn = () => {
    firebase.auth().signInWithPopup(provider)
}