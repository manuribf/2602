const objeto = {
    listaDeNomes: ["João", "Maria", "Ana Clara", "Pedro Henrique"]
}

let maiorNome = ""
let nomesSemEspaços = ""
for(let nome of objeto.listaDeNomes) {  
        nomesSemEspaços = nome.replace(/\s/g, "")
        if(nome.lenght > maiorNome.lenght) {
           maiorNome = nome
        }
    }
    console.log("Maior nome:" + maiorNome)