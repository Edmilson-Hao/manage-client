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
            footerDivs[i].style.left = `${-3+incremento}vh`
            incremento -= 15
        }

    } else if (screen.width < screen.height) {
        appContainer.style.width = '100vw'
        appContainer.style.height = '100vh'
        loginContainer.style.width = '100vw'
        loginContainer.style.height = '100vh'

        footerDivs.forEach( div => {
            div.style.width = '98vw'
            div.style.height = '70vh'
            div.style.left = `${-05+incremento}vw`
            incremento -=18
        })
        /*
        footerDivs[0].style.left = `${-05+incremento}vw` //18
        footerDivs[1].style.left = `${-23+incremento}vw` //18
        footerDivs[2].style.left = `${-41+incremento}vw` //18
        footerDivs[3].style.left = `${-59+incremento}vw` //18.5
        footerDivs[4].style.left = `${-77.5+incremento}vw`
        */
    }
})