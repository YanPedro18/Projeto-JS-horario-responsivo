function carregar() {
var msg = window.document.getElementById('msg')
var imgF = window.document.getElementById('imagem')
var data = new Date()
var minuto = data.getMinutes()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas ${minuto} minutos.`

if(hora >= 0 && hora < 12) {
    //BOM DIA!
    imgF.src = '../js/fotomanha.png'
    document.body.style.background = '#A6BDB0'

} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    imgF.src = '../js/fototarde.png'
    document.body.style.background = '#90684A'
} else { 
    //BOA NOITE!
    imgF.src = '../js/fotonoite.png'
    document.body.style.background = '#981C85'
}

} 