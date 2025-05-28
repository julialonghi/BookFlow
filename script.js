document.addEventListener("DOMContentLoaded", function() {
    let botao = document.querySelector(".cad");

    if (!botao) {
        console.error("Botão não encontrado!");
        return;
    }

    botao.addEventListener("click", function(event) {
        event.preventDefault();

        let form = document.querySelector(".formulario");
        let nome = form.nome.value.trim();
        let telefone = form.tel.value.trim();
        let email = form.email.value.trim();
        let senha = form.senha.value.trim();

        if (nome.length < 5) {
            alert("O nome deve ter pelo menos 5 caracteres.");
            return;
        }
        if (telefone.length < 9) {
            alert("O telefone deve ter pelo menos 9 números.");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            alert("Digite um e-mail válido contendo '@' e '.'");
            return;
        }
        if (senha.length < 8) {
            alert("A senha deve ter pelo menos 8 caracteres.");
            return;
        }

        alert("Cadastro realizado com sucesso!");
        form.submit(); 
    });
});
