// script.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('messages').innerHTML = '<div id="success">Usuario registrado correctamente</div>';
        } else {
            document.getElementById('messages').innerHTML = '<div id="error">Error al registrar usuario</div>';
        }
    })
    .catch(error => console.error('Error:', error));
});
