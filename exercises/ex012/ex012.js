var age = 29
console.log(`Você tem ${age} anos de idade. `)
if (age < 18) {
    console.log('Você não pode entrar neste evento.')
} else if (age < 21) {
    console.log('Você pode entrar neste evento, porém não poderá consumir bebida alcoólica.')
} else {
    console.log('Você pode entrar neste evento e pode consumir bebida alcoólica.')
}