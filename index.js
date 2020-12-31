const footerDivs = document.querySelectorAll('.footerDivs')
const formButton = document.querySelector('#formButton')

window.addEventListener('load', function () {
    /*Responsividade da página
    ------------------------------------------------------------------------------------------- */
    const appContainer = document.querySelector('app')
    const loginContainer = document.querySelector('login')
    var incremento = 0;
    if (document.title === 'Entrar') {
        const loadingDiv = document.querySelector('#loadingDiv')
        loadingDiv.style.display = 'none'
    }

    if (screen.width > screen.height) {
        appContainer.style.width = '75vh'
        appContainer.style.height = '100vh'
        loginContainer.style.width = '75vh'
        loginContainer.style.height = '100vh'

        for (const i in footerDivs) {
            footerDivs[i].style.left = `${0+incremento}vh`
            incremento -= 15
        }

    } else if (screen.width < screen.height) {
        appContainer.style.width = '100vw'
        appContainer.style.height = '100vh'
        loginContainer.style.width = '100vw'
        loginContainer.style.height = '100vh'

        for (const i in footerDivs) {
            footerDivs[i].style.width = '45vh'
            footerDivs[i].style.height = '70vh'
            footerDivs[i].style.left = `${0+incremento}vh`
            incremento -= 9
        }

        document.querySelector('app').style.border = 'none'
    }
})

var tipoPessoa = document.getElementById('tipoPessoa').value
var nomeCliente = document.getElementById('nomeCliente').value
var emailCliente = document.getElementById('emailCliente').value
var telefoneClient = document.getElementById('telefoneClient').value
var origemCliente = document.getElementById('origemCliente').value
var situacaoCliente = document.getElementById('situacaoCliente').value
var observacao = document.getElementById('observacao').value

formButton.onclick = ev => {
    db.collection('contacts').add({
        usuario: loggedInUser.uid,
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