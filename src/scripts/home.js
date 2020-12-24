firebase.auth().onAuthStateChanged(function (user){
    if (user) {
        let welcomeMessage = document.querySelector('#welcomeMessage')
        let loggedInUserFirstName = document.querySelector('#loggedInUserFirstName')

        let namesplit = firebase.auth().currentUser.displayName.split(' ')
        
        welcomeMessage.innerHTML = 'Bem vindo, '
        loggedInUserFirstName.innerHTML = namesplit[0]
        

    } else logOut()
});

logOut = () => {
    firebase.auth().signOut()
    window.location.href = './login.html';
}

var btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "CLICK ME";                   // Insert text
document.body.appendChild(btn)