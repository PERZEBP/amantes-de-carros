function pesquisar(){
let section = document.getElementById ("resultados-pesquisa")

let campoPesquisa = document.getElementById("campo-pesquisa").value

if(campoPesquisa == "" ){
        section.innerHTML = "<p>Digite sua pesquisa</p"
        return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";

for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
                resultados += `
        <div class="item-resultado">
                <h2> <a href="#"></a>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Descubra mais carros que marcaram história no Brasil</a>
        </div>
` 
        }

   if(!resultados){
        resultados = "<p>Nenhum resultado encontrado</p";
        }
}
section.innerHTML = resultados;
}
