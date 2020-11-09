/*
let num = []
num.push(7)
num.push(4)
num.push(2)
num.push(11)
num.push(9)
num.push(54)
console.log (`Os números digitados foram ${num}`)
console.log (`Em ordem crescente: ${num.sort(function(a,b){return a-b})}`)
console.log (`Ao todo, temos ${num.length} valores adicionados.`)
console.log (`O menor valor digitado foi ${num[0]} e o maior valor digitado foi ${num[num.length - 1]}.`)
sum = num.reduce((sum, currentElement) => sum + currentElement)
console.log (`A soma de todos os valores adicionados é ${sum}`)
media = sum / num.length
console.log (`A média dos valores adicionados é ${media}`)
*/

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert ('Valor inválido ou número já existente na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.length == 0) {
        alert ('Adicione ao menos 1 valor antes de clicar em FINALIZAR.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Você adicionou ${tot} número(s) à lista.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}.</p>`
    }
}