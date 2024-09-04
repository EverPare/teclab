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
        event.preventDefault(); // Evitar el envío por defecto para hacer las validaciones

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

        // Mostrar alerta de éxito
        Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: "¡Tu registro se ha completado exitosamente!",
        }).then(() => {
            // Enviar el formulario después de las validaciones
            form.submit();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.carousel-item img');
    var modalImage = document.getElementById('modalImage');
    var imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            modalImage.src = this.src; // Establece la imagen del modal a la imagen clickeada
            imageModal.show(); // Muestra el modal
        });
    });
});

$('.carousel').carousel({
    interval: 2000, // Cambia la imagen cada 2 segundos
    ride: 'carousel'
});