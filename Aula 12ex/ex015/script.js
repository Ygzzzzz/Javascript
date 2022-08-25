function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados novamente') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'bernardo.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemhomem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adultohomem.jpg')
            }else {
                 img.setAttribute('src', 'idosohomem.jpg')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'kidmulher.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemmulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adultamulher.jpg')
            }else {
            img.setAttribute('src', 'idosomulher.jpg')
            }
        }       
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}