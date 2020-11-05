function contar() {
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var contagem = document.getElementById('contagem')
    
    if (inicio.length == 0 || inicio < 0 || fim.length == 0 || fim < 0 || passo.length == 0 || passo <= 0 ) {
        alert('Um ou mais dados estão inválidos. Preencha novamente os campos.')
    } else {
        var count = inicio
        contagem.innerHTML = 'Contando...  '
        if (inicio < fim) {
            for (count = inicio; count <= fim; count += passo) {
                contagem.innerHTML += `${count} \u{27A1}`
            }
        } else {
            for (count = inicio; count >= fim; count -= passo) {
                contagem.innerHTML += `${count} \u{27A1}`
            }
        }
        contagem.innerHTML += `\u{1F3C1}`
    }
}

