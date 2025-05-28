document.addEventListener("DOMContentLoaded", function() {
    let botao = document.querySelector(".cad");
    if (!botao) {
        console.error("Botão não encontrado!");
        return;
    }

    botao.addEventListener("click", function(event) {
        event.preventDefault(); 

        let campos = document.querySelectorAll(".formu");
        let campoVazio = false;

        campos.forEach((campo) => {
            let mensagemErro = campo.closest("p").querySelector(".erro");

            if (!mensagemErro) return;

            if (campo.value.trim() === "") {
                mensagemErro.style.display = "inline"; 
                campoVazio = true;
            } else {
                mensagemErro.style.display = "none"; 
            }
            if (campo.name === "email") { 
                let emailValido = campo.value.includes("@") && campo.value.includes(".");
                
                if (!emailValido) {
                    let quebraLinha = document.createElement("br");
                    let mensagemErro = document.createElement("span"); 

                    mensagemErro.textContent = "Digite um e-mail válido contendo '@' e '.'";
                    mensagemErro.classList.add("erro-visivel");

                    campo.parentElement.appendChild(quebraLinha); 
                    campo.parentElement.appendChild(mensagemErro); 
                }

            }
        });

        if (!campoVazio) {
            alert("Cadastro realizado com sucesso!");
            document.querySelector(".formulario").submit();
        }
    });
});