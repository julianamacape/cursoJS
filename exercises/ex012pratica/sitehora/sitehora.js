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
        document.body.style.background = 'rgba(250, 214, 53, 0.788)'
    } else if (hora <= 18) {
        picture.src = '02afternoon.png'
        greeting.innerHTML = 'Boa Tarde!'
        document.body.style.background = 'rgba(160, 81, 29, 0.952)'
    } else {
        picture.src = '03night.png'
        greeting.innerHTML = 'Boa noite!'
        document.body.style.background = 'rgba(9, 6, 51, 0.952)'
    }
}