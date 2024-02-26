let ListaDeCompras = {
    produtos: {
        'leite': 20,
        'suco': 10,
        'manteiga': 9,
        'aveia': 12
    }
}
let soma = 0;
console.log(ListaDeCompras.produtos)
for(let i in ListaDeCompras.produtos) {
    soma += ListaDeCompras.produtos[i]
}
console.log(soma)







                                                                                                                                                      


