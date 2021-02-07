let tipoPessoa
let nomeCliente
let emailCliente
let telefoneClient
let origemCliente
let situacaoCliente
let observacao
//let li
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

const retrieveDataFromFirebase = async () => {
    await db.collection('users').doc(loggedInUser.uid).collection('contacts').get()
    .then((documentos) => {
        documentos.docs.forEach((d) => {
            contatos.push(d.data())
        })
        
        generateNameList(ul,contatos,searchBar.value)
        generateNameList(ulResultadoList,contatos,searchBar.value)
        //li = Array.from(document.getElementsByClassName('cont'))
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
        case "Todos":
            generateNameList(ulResultadoList,contatos,searchBar.value)
        break;
        case "Cliente Novo":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "Em negociação":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "Cliente Perdido":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "Sem Contato":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "Venda Concretizada":
            generateSituationList(ulResultadoList,contatos,selectList.value)
        break;
        case "Venda Perdida":
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

const popupCloser = document.querySelector('.popup-closer')
const popupContainer = document.querySelector('.popup-container')
const popup = document.querySelector('.popup')
const closePopup = () => {
    popupContainer.style.display = 'none'
}

popupCloser.addEventListener('click', closePopup)

//const ulResultadoList = document.querySelector('#ulResultadoList')
const listOfContacts = document.querySelector('#listOfContacts')



const showPopup = () => {
    popupContainer.style.display = 'block'
}

const populatePopup = name => {
    popup.innerHTML = ''
    
    const popupContent = contatos.map( contato => {
        console.log(contato)
        if (name === contato.nome) return `
            <h2>${name}</h2>
            <p>E-mail: ${contato.email}</p>
            <p>Telefone: ${contato.telefone}</p>
            <p>Tipo: ${contato.tipo}</p>
            <p>Situação: ${contato.situacao}</p>
            <p>Origem: ${contato.origem}</p>
            <p>Observação: ${contato.observacaoNegociacao}</p>
            <span class='popup-btn'><a href="tel:${contato.telefone}">Ligar</a></span>
            <span class='popup-btn whatsapp'><a target='_blank' href="https://api.whatsapp.com/send/?phone=55${contato.telefone}">WhatsApp</a></span>
        `
    }).join('')

    popup.innerHTML = popupContent
}

ulResultadoList.addEventListener('click', event => {
    let name = event.target.innerText
    showPopup()
    populatePopup(name)
    
    //console.log(event.target.innerText)
})

listOfContacts.addEventListener('click', event => {
    let name = event.target.innerText
    showPopup()
    populatePopup(name)
    
    //console.log(event.target.innerText)
})