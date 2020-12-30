
const footerDivs = document.querySelectorAll('.footerDivs')
const formButton = document.querySelector('#formButton')

window.addEventListener('load', function () {
    /*Responsividade da página
    ------------------------------------------------------------------------------------------- */
    const appContainer = document.querySelector('app')
    var incremento = 0;
    if (document.title === 'Entrar') {
        const loadingDiv = document.querySelector('#loadingDiv')
        loadingDiv.style.display = 'none'
    }

    if (screen.width > screen.height) {
        appContainer.style.width = '75vh'
        appContainer.style.height = '100vh'

        for (const i in footerDivs) {
            footerDivs[i].style.left = `${0+incremento}vh`
            incremento -= 15
        }

    } else if (screen.width < screen.height) {
        appContainer.style.width = '100vw'
        appContainer.style.height = '100vh'
        
        for (const i in footerDivs) {
            footerDivs[i].style.width = '45vh'
            footerDivs[i].style.height = '70vh'
            footerDivs[i].style.left = `${0+incremento}vh`
            incremento -= 9
        }

        document.querySelector('app').style.border = 'none'
    }
})

firebase.auth().onAuthStateChanged(function(user) {
    if (!user && document.title !== 'Entrar') window.location.href = './login.html';
})

var contato = {
    nome: 'alow'
}
formButton.onclick = ev => {
    contato.nome = toString(document.querySelector('#nomeCliente'))
    
    db.collection("users").add({
        first: firebase.auth().currentUser.displayName
    })
    ev.preventDefault()
}