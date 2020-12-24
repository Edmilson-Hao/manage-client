window.addEventListener('load', function (){
    let loggedInUser = firebase.auth().currentUser;
    document.querySelector('#welcomeUserString').innerHTML = `
    Bem vindo, ${loggedInUser.displayName}
    `;
})