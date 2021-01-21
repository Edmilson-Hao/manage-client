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
        
        generateNameList(ul,contatos,searchBar.value)
        generateNameList(ulResultadoList,contatos,searchBar.value)
    })

}

const getSearchString = e => {
    console.log(e.target.value)
    const searchString = e.target.value
    generateNameList(ul,contatos,searchString)
}

searchBar.addEventListener('keyup',  getSearchString)

const selectList = document.querySelector("#selectList")
const divListGenerated = document.querySelector('#divListGenerated')
const ulResultadoList = document.querySelector('#ulResultadoList')

const changeList = () => {
    switch (selectList.value) {
        case "":
            ulResultadoList.innerHTML = ''
        break;
        case "todos":
            generateNameList(ulResultadoList,contatos,searchBar.value)
        break;
        case "clienteNovo":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "emNegociacao":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "clientePerdido":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "semContato":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "vendaConcretizada":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "vendaPerdida":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
    }
}
selectList.addEventListener('click', changeList)

const generateNameList = (el,c,l,i) => {
    const htmlString = c.map(c => {
        if (c.nome.toLowerCase().includes(l.toLowerCase()))   return `
                    <li class='cont'>
                        <h2 class='contactNameHeader'>${c.nome}</h2>
                    </li>
                `
    }).join('')
    
    el.innerHTML = htmlString
}


const generateSituationList = (el,c,l,i) => {
    const htmlString = c.map(c => {
        if (c.situacao.toLowerCase().includes(l.toLowerCase()))   return `
                    <li class='cont'>
                        <h2 class='contactNameHeader'>${c.nome}</h2>
                    </li>
                `
    }).join('')
    
    el.innerHTML = htmlString
}

//let li = Array.from(document.getElementsByClassName('cont'))

let li = document.querySelector("#listOfContacts")

li.addEventListener('click', e => {
    console.log(e.target.innerText)
    const contactName = e.target.innerText
    const popUpContact = document.createElement('div')
    popUpContact.classList.add('popUp')

    popUpContact.innerHTML = `
        Alow ${contactName}
    `
})









/*
i.forEach( contato => {
    console.log(contato.children[0].innerText)
})
*/