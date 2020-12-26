window.addEventListener('load', function () {
    const appContainer = document.querySelector('app')
    const appLogoImage = document.querySelector('.icon-logo')
    const loginButton = document.querySelector('#loginButton')

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

/*
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) window.location.href = './login.html';
})
*/