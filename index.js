const dados = require('./Index.json')
console.log(dados)

function exibInfo() {

    const _objData = JSON.parse(dados)
    console.log(dados)
    let teste = (`<div id="infoBeast" class="infoBest">
    <div class="flex-container">
    <div class="titulo">Medusa</div>
    <div class=flex-conteudo>
        <img class="imgBeast" src="https://s3.static.brasilescola.uol.com.br/be/2022/02/medusa.jpg">
            <div class="_infoBeast">
                ${dados}
            </div>
        </div>
    </div>`)

    document.querySelector('#infoBeast').innerHTML = teste
    console.log(_objData[infoBeast])
}   
