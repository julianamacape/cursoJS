function tabuada() {
    var num = Number(document.getElementById('txtnumero').value)
    var contagem = document.getElementById('contagem')
    if (num.length == 0 || num == 0 || num > 10) {
        alert ('Digite um número entre 1 e 10')
    } else {
        contagem.innerHTML = `Essa é a tabuada de ${num}: <br>`
        var count = 1
        var res = ''
        for (count; count <= 10; count++) {
            res = count * num
            contagem.innerHTML += `${num} x ${count} = ${res} <br>`
        }
    }
}