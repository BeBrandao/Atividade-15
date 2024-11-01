/*Questao 1*/

var numeros = [5, 7, 1, 8, 9];

numeros.sort(function(a, b) {
   return b - a;
});
console.log(numeros);

/*Questao 2*/

var vetor = ['Fulano', 'Beltrano', 'Ciclano'];

let Quantidade = vetor.length;

for (y=0; y<=Quantidade; y++) {
   console.log(vetor[y])
};

/*Questao 3*/

var listaNomes = new Array();

function adicionarLista() {
   var texto = document.getElementById("texto").value;
   listaNomes.push(texto);
   var itemLista = document.createElement("li");
   itemLista.innerHTML = texto;
   var nomes = document.getElementById("nomes");
   nomes.appendChild(itemLista);
}

/*Questao 4*/

var escola = {
   nome_completo: "Instituto Federal de Minas Gerais",
   sigla: "IFMG",
   cidade: "Sabará",
   estado: "MG"
};

console.log(`O ${escola.nome_completo} (${escola.sigla}) fica na cidade de ${escola.cidade}-${escola.estado}`)

/*Questao 5*/

var usuarios = [{
   nome: "Luke",
   habilidades: ["Python", " HTML", " CSS"]
   },
   {
   nome: "Lea",
   habilidades: ["Javascript", " ReactJs", " NodeJs"]
}];

for(z=0; z<usuarios.length; z++) {
   texto = `${usuarios[z].nome} sabe muito de: ${usuarios[z].habilidades}.`
   var exibir = document.createElement("p");
   exibir.innerHTML = texto;
   var nomes = document.getElementById("corpo");
   nomes.appendChild(exibir);
}

/*Questão 6*/

var contagem = [
    {imagem:'joia.jpg', texto: 'Acabou'},
    {imagem:'um.jpg', texto: 'Um'},
    {imagem:'dois.jpg', texto: 'Dois'},
    {imagem:'tres.jpg', texto: 'Três'},
    {imagem:'quatro.jpg', texto: 'Quatro'},
    {imagem:'cinco.jpg', texto: 'Cinco'}
];

var indice = contagem.length - 1;
escrita = "Acabou"
function regressiva(){
    if(indice < 0) {
        return false;
    }
    var img = document.querySelector("#contador img");
    var div = document.querySelector("#contador div");
    img.src = contagem[indice].imagem;
    div.innerHTML = contagem[indice].texto;
    indice = indice - 1;
}

setInterval(regressiva, 1500);
