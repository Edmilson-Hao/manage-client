window.addEventListener('load', function () {
    const appContainer = document.querySelector('app')
    const appLogoImage = document.querySelector('.icon-logo')
    const notAUserImage = document.querySelector('.not-a-user-icon')

    if (screen.width > screen.height) {
        appContainer.style.width = '75vh'
        appContainer.style.height = '100vh'
    } else if (screen.width < screen.height) {
        appContainer.style.width = '100vw'
        appContainer.style.height = '92.5vh'

        appLogoImage.style.position = 'absolute'
        appLogoImage.style.top = '60vh'
        appLogoImage.style.left = '20vw'

        notAUserImage.style.width = '30vw'
        notAUserImage.style.height = '30vw'
        notAUserImage.style.left = '35vw'
        notAUserImage.style.position = 'absolute'
    }
})

/*
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) window.location.href = './login.html';
})
*/