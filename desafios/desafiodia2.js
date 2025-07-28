//Mini projeto: Sistema simples de tarefas
//fazer um sistema com funções para adicionar tarefas, remover e listar as tarefas

let tarefas = [];

function adicionarTarefa(tarefa) { //adicionar a tarefa colocada
    tarefas.push(tarefa);
}

function removerTarefa(){ //remover a última tarefa
    tarefas.pop();
}

function listarTarefas(){ //mostrar a lista de todas as tarefas
    console.log(tarefas);
}

//Simulação de utilização da lista de tarefas
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios");
listarTarefas(); // ["Estudar JavaScript", "Fazer exercícios"]
removerTarefa();
listarTarefas(); // ["Estudar JavaScript"]