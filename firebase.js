(function () {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyCJr2xAUn7B2CBcQdnLenaZkD0Mlbb-hWo",
    authDomain: "manage-client-63710.firebaseapp.com",
    databaseURL: "https://manage-client-63710-default-rtdb.firebaseio.com",
    projectId: "manage-client-63710",
    storageBucket: "manage-client-63710.appspot.com",
    messagingSenderId: "130822886914",
    appId: "1:130822886914:web:b7997a58ded4fd720f391b",
    measurementId: "G-H3444GNM1S"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
})()

var provider = new firebase.auth.GoogleAuthProvider()

function logIn() {

    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("Antes")
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log("Depois")
    }).catch(function(error) {
        console.log(error)
    });
}