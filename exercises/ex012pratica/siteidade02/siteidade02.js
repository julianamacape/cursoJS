function verificar() {
    var anoatual = new Date().getFullYear()
    var anonasc = window.document.getElementById('txtyear').value
    var output = window.document.getElementById('output')
    if (anonasc.length == 0 || anonasc < 1900 || anonasc > anoatual) {
        alert('Dados inválidos. Preencha novamente.')
    } else {
        var clicksex = document.getElementsByName('gender')
        var age = anoatual - anonasc
        var picture = document.createElement('img')
        picture.setAttribute('id', 'foto')
        if (clicksex[0].checked) {
            output.innerHTML = `Você é homem, nasceu em ${anonasc} e tem ${age} anos de idade.`
            if (age < 4) {
                picture.setAttribute('src', 'baby.png')
            } else if (age < 13) {
                picture.setAttribute('src', 'childboy.png')
            } else if (age < 18) {
                picture.setAttribute('src', 'teenboy.png')
            } else if (age < 35) {
                picture.setAttribute('src', 'adultman.png')
            } else if (age < 60) {
                picture.setAttribute('src', 'middleagedman.png')
            } else {
                picture.setAttribute('src', 'elderly.png')
            }
        } else {
            output.innerHTML = `Você é mulher, nasceu em ${anonasc} e tem ${age} anos de idade.`
            if (age < 4) {
                picture.setAttribute('src', 'baby.png')
            } else if (age < 13) {
                picture.setAttribute('src', 'childgirl.png')
            } else if (age < 18) {
                picture.setAttribute('src', 'teengirl.png')
            } else if (age < 35) {
                picture.setAttribute('src', 'adultwoman.png')
            } else if (age < 60) {
                picture.setAttribute('src', 'middleagedwoman.png')
            } else {
                picture.setAttribute('src', 'elderly.png')
            }
        }
        output.style.textAlign = 'center'
        output.appendChild(picture)
    }
}