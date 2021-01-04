var tipoPessoa
var nomeCliente
var emailCliente
var telefoneClient
var origemCliente
var situacaoCliente
var observacao
const footerDivs = document.querySelectorAll('.footerDivs')
const formButton = document.querySelector('#formButton')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const ul= document.querySelector('#listOfContacts')
contatos = []
filteredContacts = []

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

    db.collection('users').doc(loggedInUser.uid).collection('contacts').add({
        usuario: loggedInUser.uid,
        nome: nomeCliente,
        tipo: tipoPessoa,
        email: emailCliente,
        telefone: telefoneClient,
        origem: origemCliente,
        situacao: situacaoCliente,
        observacaoNegociacao: observacao
    })
    .then(function(docRef) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    })
    .catch(function(error) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    })

    ev.preventDefault()
}

retrieveDataFromFIrebase = () => {
    db.collection('users').doc(loggedInUser.uid).collection('contacts').get()
    .then((documentos) => {
        documentos.docs.forEach((d) => {
            contatos.push(d.data())
        })
    })
    printToPage()
}

printToPage = () => {
    ul.innerHTML= ''
    let pesquisaNome = document.querySelector('#searchBar').value
    for (i in contatos) {
        let li = document.createElement('li')

        if (contatos[i].nome.includes(pesquisaNome)){
            li.innerHTML = `
                <br>
                Nome: ${contatos[i].nome}
                <br>
                Telefone: ${contatos[i].telefone}
                <br>
                Tipo de Pessoa: ${contatos[i].tipo}
                <br>
                E-mail: ${contatos[i].email}
                <br>
                Origem da Captação: ${contatos[i].origem}
                <br>
                Situação: ${contatos[i].situacao}
                <br>
                Observações: ${contatos[i].observacaoNegociacao}
                <hr>
            `            
            ul.appendChild(li)
        }
    }
    contatos = []
}

searchBar.addEventListener('keypress',  e => {
    if (e.key === 'Enter') {
      retrieveDataFromFIrebase()
    }
})

searchButton.addEventListener('click', function () {
    retrieveDataFromFIrebase()
})

/*
    for (i in contatos) {
        let li = document.createElement('li')

        if (contatos[i].nome.includes(pesquisaNome)){
            li.innerHTML = contatos[i].nome
            document.querySelector('#listOfContacts').appendChild(li)
        }
    }    
*/