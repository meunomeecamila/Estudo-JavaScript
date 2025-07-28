//Estudos cronograma java script
// Dia 4 -> Objetos e JSON

//Objetos ------------------>
//são combinações de várias variáveis com seus valores
let usuario = {
  nome: "Camila",
  idade: 18,
  curso: "Ciência da Computação"
};

//para acessar, colocamos objeto.oqqueremos. Ex:
console.log(usuario.nome); //imprime: Camila
console.log(usuario.idade); //imprime: 18

//também podemos:
/*adicionar coisas novas: */ usuario.email = "camila@email.com";
/*modificar as ja existentes */ usuario.idade = 21;
/*deletar */ delete usuario.curso;


//Métodos em objetos --------------->
/*também podemos incluir funções dentro de objetos, para que essa função possa ser chamada e funcione para 
aquele conjunto de informações*/
//obs: para isso, utilizamos o THIS, que indica que será a variável dentro daquele objeto

let pessoa = {
  nome: "João",
  falar: function() { //método dentro do objeto
    console.log("Olá, meu nome é " + this.nome); //this.nome significa q é este nome, logo João
  }
};

pessoa.falar(); // "Olá, meu nome é João"

//JSON e sua utilização ---------------->
//Json é a sigla de JavaScript Object Notation. Mas qual a sua utilização?
/*Suponha que temos um objeto criado, como os acima, mas queremos salvá-lo no local storage, 
enviar para um servidor ou gravar o dado? Para isso, temos que transformá-lo num trecho de texto. 
E é aí que entra o JSON*/

//objeto no código:
let usuario = {
  nome: "Camila",
  idade: 20,
  curso: "Computação"
};


//objeto em JSON:
{
  "nome": "Camila",
  "idade": 20,
  "curso": "Computação"
}

//Para converter esse objeto em JSON, utilizamos:
let textoJSON = JSON.stringify(usuario);
console.log(textoJSON);
//e ele já faz o trabalho pra gente!


//Agora, se temos o JSON e queremos voltar ele para código, fazemos:
let objetoDeNovo = JSON.parse(textoJSON);
console.log(objetoDeNovo.nome); // "Camila"
//e ele também já faz o trabalho pra gente!




