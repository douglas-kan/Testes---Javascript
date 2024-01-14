let idades = [21, 33, 12, 18, 22, 59, 78, 1, 17]
console.log("TODAS AS IDADES", idades)
//Filter -> Pegar alguns elementos
function maiorDeIdade(idades) {
    /*let osMaiores = []
    for(let i=0; i<idades.length; i++) {
        if(idades[i] >= 18) {
            osMaiores.push(idades[i])
        }
    }
    return osMaiores*/

    /*let a = idades.filter(function(idade) {
        if(idade >= 18) {
            return idade
        }
    })*/

    let b = idades.filter(idade => idade >= 18)
    return b 
}
console.log("SÃO MAIORES DE IDADE", maiorDeIdade(idades))


//Map -> Passar em todos
function adicionaUmAno(idades) {
    /*for(let i=0; i<idades.length; i++) {
        idades[i] = idades[i] + 1
    }*/
    return idades.map(idade => idade + 1)
}
console.log("ANTES", idades)
novaIdade = adicionaUmAno(idades)
console.log("NOVA IDADE", novaIdade)
console.log("DEPOIS", idades)


//Reduce -> Reduzi para 1 element
function somaDasIdades(idades) {
    /*let soma = 0
    for(let i=0; i<soma.length; i++) {
        soma += idades[i]
    }
    return soma*/
    let valorInicial = 1000
    return idades.reduce((soma, idade) => soma + idade, valorInicial)
}
console.log("SOMA DAS IDADES", somaDasIdades(idades))