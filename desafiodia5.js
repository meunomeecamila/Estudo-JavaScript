//Mini projeto: Contador simples com utilização de HTML
//Criar um projeto que conte quantas vezes um botão de uma página HTML foi clicado
//HTML:
/*
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Contador de Cliques</title>
</head>
<body>
  <h1>Contador</h1>
  <p id="contador">0</p>
  <button id="botao">Clique aqui!</button>

  <script src="script.js"></script>
</body>
</html>
*/

//JAVA SCRIPT
//selecionar os itens html
const botao = document.querySelector("#botao");
const contador = document.querySelector("#contador");

let cont = 0;

//fazer a função
//essa função aumenta o contador em 1 a cada vez que é chamada
function clique(){
    cont++;
    contador.innerText = cont; 
}

//quando o botão for clicado, chama a função
botao.addEventListener("click", clique);


