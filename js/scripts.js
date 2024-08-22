document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y los campos
    const form = document.getElementById("registrationForm");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const usuario = document.getElementById("usuario");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Añadir evento de submit al formulario
    form.addEventListener("submit", function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Validar los campos
        if (nombre.value.trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Nombre requerido",
                text: "Por favor ingresa tu nombre.",
            });
            return;
        }

        if (email.value.trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Correo electrónico requerido",
                text: "Por favor ingresa tu correo electrónico.",
            });
            return;
        }

        if (usuario.value.trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Nombre de usuario requerido",
                text: "Por favor ingresa tu nombre de usuario.",
            });
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password.value)) {
            Swal.fire({
                icon: "warning",
                title: "Contraseña no válida",
                text: "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula y un número.",
            });
            return;
        }

        if (password.value !== confirmPassword.value) {
            Swal.fire({
                icon: "warning",
                title: "Contraseñas no coinciden",
                text: "Por favor, asegúrate de que las contraseñas coincidan.",
            });
            return;
        }
        
        // Almacenar los datos en localStorage
        localStorage.setItem("nombre", nombre.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("usuario", usuario.value);

        // Si todas las validaciones pasan, se puede enviar el formulario o realizar otra acción
        Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: "¡Tu registro se ha completado exitosamente!",
        }).then(() => {
            // Aquí puedes redirigir al usuario o limpiar el formulario
            form.reset();
        });
    });
});