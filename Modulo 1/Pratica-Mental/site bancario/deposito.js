function proximo(){

    var txTnumCart = document.getElementById('numCart')
    var txTnumData = document.getElementById('numData')
    var txTnumCod = document.getElementById('numCod')
    var txTdeposito = document.getElementById('deposito')
    var opcoes = document.getElementsByName('tipoD')
    var divCart = document.getElementById('cart')
    var divPix = document.getElementById('divpix')

    var depoisto = Number(txTdeposito.value)
    localStorage.setItem('deposito', depoisto)

    if (opcoes[0].checked){
        divCart.style.visibility="visible"
        divPix.style.visibility="hidden"
    }else{
        if(opcoes[1].checked){
            divCart.style.visibility="hidden"
            divPix.style.visibility="visible"
        }
    }
}

function depoisto(){
    if (txTnumCar.value && txTnumData.value && txTnumCod.value){
        window.location;href="depFim.html"
    }
}

