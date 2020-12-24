let loggedInUser = firebase.auth().currentUser;

class _Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`
        <ul class="menu">
            <li><a href="./src/Routes/adicionar.html">  <img src="./src/assets/add.png" alt="Ir para página adicionar">         </a></li>
            <li><a href="./src/Routes/pesquisar.html">  <img src="./src/assets/search.png" alt="Ir para página de pesquisa">    </a></li>
            <li><a href="./src/Routes/home.html">       <img src="./src/assets/home.png" alt="Ir para página inicial">          </a></li>
            <li><a href="./src/Routes/lista.html">      <img src="./src/assets/lists.png" alt="Ir para página de listas">       </a></li>
            <li><a href="./src/Routes/perfil.html">     <img src="./src/assets/profile.png" alt="Ir para página de perfil">     </a></li>
        </ul>
        
        
        `;
        
    }
}
window.customElements.define('my-footer', _Footer);


/*


if (user){
    let loggedInUser = firebase.auth().currentUser

    document.querySelector('main').style.display = 'block';
    document.getElementById('userName').innerHTML = loggedInUser.displayName
    //document.getElementById('userId').innerHTML = loggedInUser.uid;
    document.getElementById('userProfilePicture').src = loggedInUser.photoURL;
} else firebase.auth().signInWithPopup(provider)



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