const formulario = document.querySelector('form')

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); /* .preventDefault leva em consideração apenas o primeiro clique do usuário, desconsiderando outros cliques */
    let nome = formulario.nome.value;
    let email = formulario.email.value;
    let telefone = formulario.telefone.value;
    let assunto = formulario.assunto.value;
    let mensagem = formulario.mensagem.value;
   
    console.log(nome, email, telefone, assunto, mensagem)
    alert("Obrigada por nos contatar "+ nome +"! Logo logo te responderemos!");
})