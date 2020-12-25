window.addEventListener('load', function () {
    const body = document.body;
    body.style.backgroundSize = 'cover';
    if (screen.width > screen.height) {
        body.style.backgroundImage = "url('./src/assets/desktop-splash-screen.png')"
        document.width = screen.height/2;
    } else if (screen.width < screen.height) body.style.backgroundImage = "url('./src/assets/mobile-splash-screen.png')";
})

firebase.auth().onAuthStateChanged(function(user) {
    if (!user) window.location.href = './login.html';
})

