//Estudos cronograma java script
// Dia 5 -> DOM e Manipulação HTML

//DOM -> Document Object Model
/*É a estrutura HTML como objetos JS do nosso projeto. Assim, conseguimos acessar e alterar
eventos da nossa página utilizando js */

//Como selecionar/acessar eventos em HTML?
const titulo = document.querySelector("h1"); // por tag (apenas o nome)
const botao = document.querySelector("#meuBotao"); // por id (com a #)
const input = document.querySelector(".campo"); // por classe (com o .)

//Como alterar seu conteúdo?
//innerText -> altera o texto
titulo.innerText = "Novo texto"; // altera só o texto
//innerHTML -> altera o html
titulo.innerHTML = "<em>Texto em itálico</em>"; // aceita HTML

//Como escutar os eventos?
//obs: escutar significa descobrir o que este elemento quer nos falar, como true ou false
botao.addEventListener("click", function() {
  alert("Botão clicado!");
});

//Trabalhando com os inputs todos juntos:
//Vamos supor que seu HTML esteja assim:
//html
<input type="text" id="nome">
<button id="enviar">Enviar</button>
<p id="mensagem"></p>
//(isso significa que temos um texto com o id nome, um botão com o id enviar e um parágrafo com o id mensagem)

//Agora, como transformamos isso em objetos JS e utilizamos?
//js
const nome = document.querySelector("#nome"); //transformou o texto em uma constante
const enviar = document.querySelector("#enviar"); //transformou o botão em uma constante
const msg = document.querySelector("#mensagem"); //transformou o parágrafo em uma constante

//Agora, conseguimos executar funções!
enviar.addEventListener("click", function() {
  msg.innerText = "Olá, " + nome.value + "!";
});

//Vamos para o desafio?




