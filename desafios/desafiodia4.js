//Mini projeto: Sistema de cadastro de usuários
//Criar um menu interativo que permita cadastrar novos usuários, mostrar todos os usuários e sair do sistema

let usuarios = [];
console.log("Olá! Eu sou seu sistema de cadastro de usuários!");
console.log("Escolha uma das opções!");
console.log("1 -> Adicionar usuário");
console.log("2 -> Ver os usuários");
console.log("3 -> Sair");

let op = parseInt(prompt("Escolha a sua opção!"));

while(op != 3){
    if(op == 1){
        //novo usuário
        let nome = prompt("Qual o nome?");
        let idade = parseInt(prompt("Qual a idade?"));

        let novoUsuario = {
            nome: nome,
            idade: idade
        };

        //colocar no array
        usuarios.push(novoUsuario);
        alert("Usuário cadastrado com sucesso!");
    }

    else if(op == 2){
        //Mostrar usuários
        console.log(usuarios);
    }

    else {
        //caso não seja nenhum destes números
        alert("Opção inválida! Tente novamente");
    }

    op = parseInt(prompt("Qual opção você deseja?"));
}

//se chegou aqui, terminou 
alert("Você saiu do sistema!");