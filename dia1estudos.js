//Estudos cronograma java script
// Dia 1 -> comandos básicos

//console.log -> imprimir
let nome = "Camila";
console.log(nome);

//prompt -> pegar um valor do usuário (sempre pega uma string)
let nome2 = prompt("Qual o nome?");
console.log(nome2);

//para converter para um número
let num = prompt("Escolha um número");
console.log(num); //está em tipo string
const numero = parseInt(num); //transforma em numero inteiro
//obs: existe tbm o parseFloat

//alert -> posta uma mensagem para o usuário
alert("O nome era: " + nome);
alert("Agora o nome é: " + nome2);

//exercício 1
const nome = prompt("Qual seu nome?");
alert("Olá, " + nome + "! Tudo bem?");

//exercício 2
const nome = prompt("Qual seu nome?");
const nasc = prompt("Qual a data do seu nascimento?")
const nascimento = parseInt(nasc);
const ano = new Date().getFullYear();
let idade = ano - nascimento;
alert("Olá, " + nome + "! Sua idade é: " + idade);

//exercício 3
const nome = prompt("Qual seu nome?");
const pes = prompt("Qual o seu peso? Em KG");
const peso = parseFloat(pes);
const alt = prompt("Qual a sua altura? Em metros");
const altura = parseFloat(alt);

const imc = peso / (altura * altura);
alert("Seu IMC é " + imctoFixed(2));


