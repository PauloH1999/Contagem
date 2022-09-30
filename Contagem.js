
function contar(){

    var numi = document.getElementById("inicio")
    var ni = Number(numi.value)                           //numero inicio

    var fimi = document.getElementById("fim")
    var fi = Number(fimi.value)                           //numero fim

    var pasi = document.getElementById("passo")
    var pi = Number(pasi.value)                           //numero passos
    
    var res = document.getElementById("res")


    if ( ni == 0 || fi == 0 || pi == 0){

        window.alert("Preencha todos os campos vazios")   // alerta para preencher os capos vazios

    }else{

        for( var c = ni /*inicio*/ ; c <= fi /*fim*/ ; c += pi /*passos*/ ){
            
            res.innerHTML += ` ${c} \u{1f449}` //numero que será impresso na tela
        }
        res.innerHTML += ` \u{1f3c1} `

    }


}