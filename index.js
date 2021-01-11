let tipoPessoa
let nomeCliente
let emailCliente
let telefoneClient
let origemCliente
let situacaoCliente
let observacao
const footerDivs = document.querySelectorAll('.footerDivs')
const formButton = document.querySelector('#formButton')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const ul = document.querySelector('#listOfContacts')
var contatos = []
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
    .then(successSignal)
    .catch(filedSignal)

    window.location.reload()

    ev.preventDefault()
}

const successSignal = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}

const filedSignal = () => {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your work has not been saved',
        showConfirmButton: false,
        timer: 1500
    })
}

const retrieveDataFromFirebase = () => {
    db.collection('users').doc(loggedInUser.uid).collection('contacts').get()
    .then((documentos) => {
        documentos.docs.forEach((d) => {
            contatos.push(d.data())
        })
        
        generateConstactLists(ul,contatos,searchBar.value)
    })

}

searchBar.addEventListener('keyup',  e => {
    console.log(e.target.value)
    const searchString = e.target.value
    generateConstactLists(ul,contatos,searchString)
})

const selectList = document.querySelector("#selectList")
const divListGenerated = document.querySelector('#divListGenerated')

selectList.addEventListener('click', function () {
    const ulResultadoList = document.querySelector('#ulResultadoList')
    
    switch (selectList.value) {
        case "":
            ulResultadoList.innerHTML = ''
        break;
        case "clienteNovo":
            generateConstactLists(ulResultadoList,contatos,selectList.value)
        break;
        case "emNegociacao":
            generateConstactLists(ulResultadoList,contatos,selectList.value)
        break;
        case "clientePerdido":
            generateConstactLists(ulResultadoList,contatos,selectList.value)
        break;
        case "semContato":
            generateConstactLists(ulResultadoList,contatos,selectList.value)
        break;
        case "vendaConcretizada":
            generateConstactLists(ulResultadoList,contatos,selectList.value)
        break;
        case "vendaPerdida":
            generateConstactLists(ulResultadoList,contatos,selectList.value)
        break;
    }
})

const generateConstactLists = (el,c,l) => {
    const htmlString = c.map(c => {
        if (c.nome.toLowerCase().includes(l.toLowerCase()))   return `
                    <li>
                        <h2>${c.nome}</h2>
                    </li>
                `
    }).join('')
    el.innerHTML = htmlString
}