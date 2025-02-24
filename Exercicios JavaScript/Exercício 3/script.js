document.getElementById("loginForm").addEventListener("submit", function(event) {
    let usuario = document.getElementById("usuario");
    let senha = document.getElementById("senha");
    let erroUsuario = document.getElementById("erroUsuario");
    let erroSenha = document.getElementById("erroSenha");

    if (usuario.value === "") {
        erroUsuario.textContent = "Usuário é obrigatório!";
        event.preventDefault(); // Impede o envio
    } else {
        erroUsuario.textContent = "";
    }

    if (senha.value === "") {
        erroSenha.textContent = "Senha é obrigatória!";
        event.preventDefault(); // Impede o envio
    } else {
        erroSenha.textContent = "";
    }
});