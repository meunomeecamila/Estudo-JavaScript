//Agora, vamos fazer o nosso formulário realmente funcionar!

//Primeiro, transformamos os itens em objetos
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const botao = document.querySelector("#cadastrar");
const msg = document.querySelector("#mensagem");
const ver = document.querySelector("#mostrar");

//Agora, criamos um array!
let usuarios = []; //começa vazio pois não tem nenhum usuário ainda!

//Criamos tambéma a função de adicionar o usuário no sistema!
function addUser(){
    //caso o usuário não tenha completado tudo, reclamar
    if(nome.value == "" || email.value == ""){
        //usuário não completou
        alert("Preencha todos os campos!");
    }

    else {
        //caso tenha preenchido, criar novo usuário
        let novoUsuario = {
            nome : nome.value,
            email :email.value
        };

        usuarios.push(novoUsuario);
        msg.innerText = `Cadastro realizado com sucesso! Bem-vindo(a), ${nome.value}!`;
        msg.style.color = "green";

        // Limpar os campos
        nome.value = "";
        email.value = "";
    }
}

function verUser(){
    if (usuarios.length === 0) {
        alert("Nenhum usuário cadastrado ainda.");
    } else {
        let lista = "Usuários cadastrados:\n";

        // Adiciona cada usuário na string
        usuarios.forEach((u, i) => {
            lista += `${i + 1}. Nome: ${u.nome} | E-mail: ${u.email}\n`;
        });

        alert(lista);
    }
}

//Agora, colocar a função em prática quando o botão for acionado
botao.addEventListener("click", addUser);

ver.addEventListener("click",verUser);



