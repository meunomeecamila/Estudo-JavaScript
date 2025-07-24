//Estudos cronograma java script
// Dia 3 -> Loops aplicados em arrays

//Loops ----------------------------------->

//for
//For funciona do mesmo jeito que em c
//Cria a variável, dá a condição de parada e dá a incrementação
//Crie um array com 4 cores e use um for para imprimir todas no console.
//Exercício 1
let cores = ["azul","verde","vermelho","amarelo"];
for(let i=0; i<4; i++){
    console.log(cores[i]);
}

//for of
//Para cada elemento dentro do array, fazer a ação
let cores = ["azul","verde","vermelho","amarelo"];
for (let cor of cores){
    console.log(cor);
}

//Exercício 2
let numeros = [1, 2, 3, 4, 5];
for(let num of numeros){
    console.log(num);
}

//while
//funciona igual ao c
//tem o break (parar) e o continue (continuar)

//Exercício 3
//Crie um while que conte de 1 até 5 no console.
let cont = 0;
while(cont < 5){
    console.log(cont + 1);
    cont++;
}

//------------------------------------------------>
//Parte 2 

//for each 
//executa alguma coisa diferente pra cada elemento
let frutas = ["maçã", "banana", "uva"];

frutas.forEach(function(fruta) {
  console.log("Eu gosto de " + fruta);
});

//Exercício 1
let animais = ["cachorro", "gato", "pássaro"];
animais.forEach(function(animal){
    console.log("O animal é: " + animal);
});


//map
//transforma cada item do original em um novo item, criando um novo array
let numeros = [1, 2, 3];

let novoarray = numeros.map(function(num){
    return num * 3;
});

console.log(novoarray); //retornará um novo array com todos os números multiplicados por 3
//ex: nesse caso: retornará: 3, 6 e 9. 

//Exercício 2
//Use map para criar um novo array com os preços com 10% de desconto.
let precos = [10, 25, 30];

let desconto = precos.map(function(preco){
    return preco - (preco * 0.1); //remove 10%
});

consoole.log(desconto); //imprime o array completo

//filter 
//Cria novo array com os itens que passam um teste
//Ele filtra os itens conforme uma condição.

let numeros = [1, 2, 3, 4, 5, 6];

let pares = numeros.filter(function(num) {
  return num % 2 === 0; //retorna os números que quando divididos por 2, o resultado da 0
});

console.log(pares); // [2, 4, 6]

//Exercício 3
//Use filter para criar um novo array só com maiores de idade (18 ou mais).
let idades = [12, 18, 22, 14, 30];

let maiores = idades.filter(function(id){
    return id >= 18; //retorna numeros maiores ou iguais a 18
});

console.log(maiores);


