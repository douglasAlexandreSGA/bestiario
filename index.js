const dados = [
  {
    titulo: "Meduza",
    infoBeast:"<p>A Medusa era uma górgona, um monstro de mitos gregos. Ela tinha duas irmãs,</p><br><p>também górgonas, mas, que, diferentemente dela, eram imortais.</p><br><p>Medusa tinha o poder de transformar em pedra os que olhavam diretamente para ela.</p><br><p>Ainda, algumas versões da mitologia afirmam que ela teria sido uma mulher amaldiçoada por Atena e transformada em górgona.</p><br><p>Como Medusa era uma górgona mortal, tornou-se alvo de Perseu, um herói que recebeu ajuda dos deuses para matá-la.</p><br><p>Perseu a encontrou dormindo em sua caverna, a matou e a decapitou. </p><br><p>A cabeça de Medusa ainda foi usada por ele como arma e depois entregue para Atena, que a usou como adorno em seu escudo.</P>",
    imgBeast: "https://s3.static.brasilescola.uol.com.br/be/2022/02/medusa.jpg",
  },
];
/*function atualizaBotoes() { 
  for (let i = 0, i < [dados.length], i++) {

    const _dados = [dados];
    const _dadosSelecionados = [titulo]
    for 

  }

}*/
function exibInfo() {
  
  let _imgBeast = `<img class="imgBeast" src="${dados[0].imgBeast}">`
  let teste = `<div id="infoBeast" class="infoBeast">
    <div class="flex-container">
    <div class="titulo">${dados[0].titulo}</div>
    <div class=flex-conteudo> 
            <div class="_infoBeast">
               ${dados[0].infoBeast}
            </div>
        </div>
    </div>`;
  document.querySelector("#imgBeast").innerHTML = _imgBeast;
  document.querySelector("#infoBeast").innerHTML = teste;
}

