function verificar() {
    var dob = document.getElementById('txtdob').value
    var year = new Date().getFullYear()
    var age = year - dob
    var clicksexo = document.getElementsByName('gender')
    if (clicksexo[0].checked && age < 4) {
        result.innerHTML = `Você é uma linda bebê de ${age} aninhos.`
        foto.src = 'baby.png'
    } else if (clicksexo[0].checked && age < 13) {
        result.innerHTML = `Você é uma linda menina de ${age} aninhos.`
        foto.src = 'childgirl.png'
    } else if (clicksexo[0].checked && age < 18) {
        result.innerHTML = `Você é uma adolescente de ${age} anos.`
        foto.src = 'teengirl.png'
    } else if (clicksexo[0].checked && age < 35) {
        result.innerHTML = `Você é uma jovem mulher de ${age} anos.`
        foto.src = 'adultwoman.png'
    } else if (clicksexo[0].checked && age < 60) {
        result.innerHTML = `Você é uma mulher madura de ${age} anos.`
        foto.src = 'middleagedwoman.png'
    } else if (clicksexo[0].checked && age >= 60) {
        result.innerHTML = `Você é uma senhora de ${age} anos.`
        foto.src = 'elderly.png'
    } else if (clicksexo[1].checked && age < 4) {
        result.innerHTML = `Você é um lindo bebê de ${age} aninhos.`
        foto.src = 'baby.png'
    } else if (clicksexo[1].checked && age < 13) {
        result.innerHTML = `Você é um lindo menino de ${age} aninhos.`
        foto.src = 'childboy.png'
    } else if (clicksexo[1].checked && age < 18) {
        result.innerHTML = `Você é um adolescente de ${age} anos.`
        foto.src = 'teenboy.png'
    } else if (clicksexo[1].checked && age < 35) {
        result.innerHTML = `Você é um jovem rapaz de ${age} anos.`
        foto.src = 'adultman.png'
    } else if (clicksexo[1].checked && age < 60) {
        result.innerHTML = `Você é um homem maduro de ${age} anos.`
        foto.src = 'middleagedman.png'
    } else if (clicksexo[1].checked && age >= 60) {
        result.innerHTML = `Você é um senhor de ${age} anos.`
        foto.src = 'elderly.png'
    }
}