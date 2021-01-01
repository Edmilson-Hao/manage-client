var tipoPessoa
var nomeCliente
var emailCliente
var telefoneClient
var origemCliente
var situacaoCliente
var observacao
const footerDivs = document.querySelectorAll('.footerDivs')
const formButton = document.querySelector('#formButton')

getFormData = () => {
    tipoPessoa = document.getElementById('tipoPessoa').value
    nomeCliente = document.getElementById('nomeCliente').value
    emailCliente = document.getElementById('emailCliente').value
    telefoneClient = document.getElementById('telefoneClient').value
    origemCliente = document.getElementById('origemCliente').value
    situacaoCliente = document.getElementById('situacaoCliente').value
    observacao = document.getElementById('observacao').value
}

formButton.onclick = ev => {
    
    getFormData();

    db.collection('contacts').add({
        usuario: loggedInUser.uid,
        nome: nomeCliente,
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

const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')

retrieveDataFromFIrebase = () => {
alert('Search')
}

searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      retrieveDataFromFIrebase()
    }
})

searchButton.addEventListener('click', function () {
    retrieveDataFromFIrebase()
})