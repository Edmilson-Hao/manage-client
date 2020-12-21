firebase.auth().onAuthStateChanged(function (user){
    if(user) {
        let loggedInUser = firebase.auth().currentUser;
        var tituloNomeUsuario = document.createElement('h1');
        tituloNomeUsuario.innerHTML = `Nome: ${loggedInUser.displayName}`;
        document.body.appendChild(tituloNomeUsuario)

    } else console.log(`Not Logged In: ${user}`)
});

logOut = () => {
    firebase.auth().signOut()
}

logIn = () => {
    firebase.auth().signInWithPopup(provider)
}