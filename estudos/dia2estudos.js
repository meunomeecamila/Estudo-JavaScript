//Estudos cronograma java script
// Dia 2 -> funções e arrays

//Funções ------------------->
//se escrevem com FUNCTION
function daroi(){
    console.log("Oi!");
}

daroi(); //chama a função

//com parâmetros
let nome = "Camila";
function daroicomnome(nome){
    alert("Oi " + nome);
}
daroicomnome(nome);

//com retorno
let a = 1;
let b = 2;
function soma(a,b){
    return a + b;
}
alert(soma(a,b));


//Exercício 1 -> dar oi com nome (acima)
//Exercício 2 -> Calcular IMC
let imc; //undefined
let peso = 10;
let altura = 50;

function iemece(peso,altura){
    return peso / (altura * altura);
}

imc = iemece(peso,altura);
console.log(imc);

// ------------------------------------------------------------------
//Array ------------------->
//usamos colchetes. Ex: let array = [0,1,2,3]
//começa sempre do zero
let frutas = ["banana","maçã","pera"]
//obs: caso não coloque vírgula entre, assume como um item só

//utilizações
frutas.push("uva");      // adiciona no final
frutas.pop();            // remove o último
frutas.unshift("kiwi");  // adiciona no início
frutas.shift();          // remove o primeiro
frutas.length;           // quantidade de itens

//exercício 1
//crie um array de filmes
let filmes = ["avatar","hannibal","beetlejuice"];
//mostre o primeiro filme
console.log(filmes[0]);
//adicione mais um filme
filmes.push("sharks");
//remova o primeiro
filmes.shift();
//mostre todos
console.log(filmes);



