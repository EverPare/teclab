console.log("Página cargada");document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMensaje = document.getElementById('errorMensaje');

    if (password !== confirmPassword) {
        errorMensaje.textContent = "Las contraseñas no coinciden.";
    } else {
        errorMensaje.textContent = "";
        alert("¡Registro exitoso!");
    }
});