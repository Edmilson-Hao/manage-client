logInWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
    return user
}

showUser = () => {
    console.log(user)
}