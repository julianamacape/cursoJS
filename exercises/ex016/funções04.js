/* FATORIAL de um número usando FOR

let n = 5
let count = n
let fat = 1
for (count; count >= 1; count--) {
    fat *= count
}
console.log(fat)

FATORIAL de um número usando FUNCTION + FOR
function fatorial(n) {
    let count = n
    let fat = 1
    for (count; count >= 1; count--) {
        fat *= count
    }
    return fat
}

let fator = fatorial(6)
console.log(fator)
*/

function fatorial (n) {
    if (n ==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial (6))
