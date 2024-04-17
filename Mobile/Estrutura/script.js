function salvarDados(){

    var name = document.getElementById('name').value;
    var senha = document.getElementById('senha').value;

    var usuario ={
        name: name,
        senha: senha,
    }

    console.log(usuario);
}

function validarFormulario() {
    var nome = document.getElementById('name').value.trim();
    var senha = document.getElementById('senha').value.trim();

    if (nome === '') {
        alert('Por favor, insira seu nome.');
        return false;
    }

    if (senha === '') {
        alert('Por favor, insira sua senha.');
        return false;
    }

    // You can add more validation rules as needed

    return true; // Form is valid
}

// JavaScript for saving form data
function salvarDados() {
    if (validarFormulario()) {
        // Form data is valid, you can proceed to save the data or perform other actions
        var nome = document.getElementById('name').value.trim();
        var senha = document.getElementById('senha').value.trim();
        
        // Example: You can send the data to a server using AJAX
        // Replace the URL with your endpoint
        var data = {
            nome: nome,
            senha: senha
        };
        // Example AJAX request
        /*
        fetch('your_endpoint_url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            // Handle response
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
    }
}