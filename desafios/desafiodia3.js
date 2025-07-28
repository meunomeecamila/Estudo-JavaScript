//Mini projeto: Lista de compras interativa via console
//fazer um sistema com funções para adicionar itens, remover, mostrar a lista e sair do programa

console.log("Olá! Eu sou sua lista de compras interativa!");
console.log("Escolha uma das opções!");
console.log("1 -> Adicionar item");
console.log("2 -> Remover o último item");
console.log("3 -> Mostrar a lista");
console.log("4 -> Sair");

let lista = []; //cria a lista como um array vazio
//antes de começar, transformar para inteiro
let op = parseInt(prompt("Qual opção você deseja?")); //pega a primeira opção

while(op != 4){
    if(op == 1){
        //adicionar
        let item = prompt("Digite o nome do item: ");
        lista.push(item);
    }
    else if(op == 2){
        //remover o último item
        lista.pop();
    }
    else if(op == 3){
        console.log(lista);
    }
    else if(op != 4){
        alert("Número inválido!");
    }

    //no final, perguntar se quer fazer algo mais
    op = parseInt(prompt("Qual opção você deseja?"));
}

console.log("Muito obrigada!!"); //finalização