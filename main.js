const btn = document.getElementById("entrarBtn");

btn.addEventListener("click", function() {
    const senhaCorreta = "1234"; // sua senha
    const input = document.getElementById("senhaInput").value;
    const mensagem = document.getElementById("mensagem");

    if(input === senhaCorreta) {
        // Mensagem de sucesso
        mensagem.style.color = "green";
        mensagem.innerText = "Senha correta! Abrindo nova aba...";

        // Abre imediatamente na mesma ação de clique
        window.open("pagina_restrita.html", "_blank"); // Abre em nova aba
    } else {
        mensagem.style.color = "red";
        mensagem.innerText = "Senha incorreta! Tente novamente.";
    }
});