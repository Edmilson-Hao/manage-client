window.addEventListener('load', function () {
    /*Responsividade da página
    ------------------------------------------------------------------------------------------- */
    const appContainer = document.querySelector('app')
    const appLogoImage = document.querySelector('.icon-logo')
    const loginButton = document.querySelector('#loginButton')
    
    if (document.title === 'Entrar') {
        const loadingDiv = document.querySelector('#loadingDiv')
        loadingDiv.style.display = 'none'
    }

    if (screen.width > screen.height) {
        appContainer.style.width = '75vh'
        appContainer.style.height = '100vh'
    } else if (screen.width < screen.height) {
        appContainer.style.width = '100vw'
        appContainer.style.height = '92.5vh'

        appLogoImage.style.position = 'absolute'
        appLogoImage.style.top = '30vh'
        appLogoImage.style.left = '22vw'

        loginButton.style.top = '60vh'

        document.querySelector('app').style.border = 'none'
    }
})

firebase.auth().onAuthStateChanged(function(user) {
    if (!user && document.title !== 'Entrar') window.location.href = './login.html';
})