function mostrarhora() {
    var msg = window.document.getElementById('msg')
    var picture = window.document.getElementById('picture')
    var greeting = window.document.getElementById('greeting')
    var tempo = new Date ()
    var hora = tempo.getHours()
    var minu = tempo.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minu}.`

    if (hora >= 0 && hora < 12) {
        picture.src = '01morning.png'
        greeting.innerHTML = 'Bom dia!'
    } else if (hora <= 18) {
        picture.src = '02afternoon.png'
        greeting.innerHTML = 'Boa Tarde!'
    } else {
        picture.src = '03night.png'
        greeting.innerHTML = 'Boa noite!'
    }
}