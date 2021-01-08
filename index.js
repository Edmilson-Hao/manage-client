let tipoPessoa
let nomeCliente
let emailCliente
let telefoneClient
let origemCliente
let situacaoCliente
let observacao
let searchString
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
            title: 'Your work has not been saved',
            showConfirmButton: false,
            timer: 1500
        })
    })

    ev.preventDefault()
}

retrieveDataFromFirebase = () => {
    db.collection('users').doc(loggedInUser.uid).collection('contacts').get()
    .then((documentos) => {
        documentos.docs.forEach((d) => {
            contatos.push(d.data())
        })
        for(i in contatos) {
            const li = document.createElement("li")
            li.innerHTML = `
                Nome: ${contatos[i].nome}
                Telefone: ${contatos[i].telefoneClient}
            `
            ul.appendChild(li)
        }
    })

}

searchBar.addEventListener('keyup',  e => {
    searchString = e.target.value
    displayContacts(contatos)
})

const displayContacts = (c) => {
    ul.innerHTML = ''
    for (i in c) {
        if(c[i].nome.toLowerCase().includes(searchString.toLowerCase())){
            const li = document.createElement("li")
            li.innerHTML = `
                Nome: ${c[i].nome}
                Telefone: ${c[i].telefoneClient}
            `
            ul.appendChild(li)
        }
    }
}