const dados = require("./Index.json");

function exibInfo() {
  let teste = `<div id="infoBeast" class="infoBest">
    <div class="flex-container">
    <div class="titulo">${dados[0].titulo}</div>
    <div class=flex-conteudo>
        <img class="imgBeast" src="${dados[0].imgBeast}">
            <div class="_infoBeast">
               ${dados[0].infoBeast}
            </div>
        </div>
    </div>`;

  document.querySelector("#infoBeast").innerHTML = teste;
}

console.log(dados[0].infoBeast);
