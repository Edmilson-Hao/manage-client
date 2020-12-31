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

tipoPessoa = document.querySelector('#tipoPessoa').value
nomeCliente = document.querySelector('#nomeCliente').value
emailCliente = document.querySelector('#emailCliente').value
telefoneClient = document.querySelector('#telefoneClient').value
origemCliente = document.querySelector('#origemCliente').value
situacaoCliente = document.querySelector('#situacaoCliente').value
observacao = document.querySelector('#observacao').value
user = firebase.auth().currentUser.displayName
alert(user)

formButton.onclick = ev => {
    db.collection('users').add({
        usuario: user,
        tipo: tipoPessoa,
        nome: nomeCliente,
        email: emailCliente,
        telefone: telefoneClient,
        origem: origemCliente,
        situacao: situacaoCliente,
        observacaoNegociacao: observacao
    })
    ev.preventDefault()
}