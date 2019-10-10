function registrar() {
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;
    // console.log('diste un click')
    // console.log(email)
    // console.log(contraseña)

    firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.code;
        console.log(errorCode);
        console.log(errorMessage);
    });
}