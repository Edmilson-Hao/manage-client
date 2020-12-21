window.addEventListener('load', function () {
    firebase.auth().onAuthStateChanged(function (user){
        if (user){
            let loggedInUser = firebase.auth().currentUser

            document.querySelector('main').style.display = 'block';
            document.getElementById('userName').innerHTML = loggedInUser.displayName
            document.getElementById('userId').innerHTML = loggedInUser.uid;
            document.getElementById('userProfilePicture').src = loggedInUser.photoURL;
            document.getElementById('userProfilePicture').style.borderRadius = "25px";

        } else firebase.auth().signInWithPopup(provider)
    });
})


/*
logOut = () => {
    firebase.auth().signOut()
}

logIn = () => {
    firebase.auth().signInWithPopup(provider)
}






if(user) {
    let loggedInUser = firebase.auth().currentUser;
    var tituloNomeUsuario = document.createElement('h1');
    tituloNomeUsuario.innerHTML = `Nome: ${loggedInUser.displayName}`;
    document.body.appendChild(tituloNomeUsuario)

} else {
    console.log(`Not Logged In: ${user}`)
    
}
*/