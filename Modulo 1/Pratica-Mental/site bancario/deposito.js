
var opcoes = document.getElementsByName('tipoD')
var divCart = document.getElementById('cart')
var divPix = document.getElementById('divpix')
var txTidCod = document.getElementById('cod')
var idCod = Number(txTidCod.value)
localStorage.setItem('txTcodDeposito', idCod)

function proximo(){

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

function depositar(){
    var numCart = Number(document.getElementById('numCart').value)
    var numData = Number(document.getElementById('dataCart').value)
    var numCod = Number(document.getElementById('codCart').value)
    var txTidCod = document.getElementById('cod')
    var idCod = Number(txTidCod.value)
    var txTdeposito = document.getElementById('deposito')
    var depositoo = Number(txTdeposito.value)
    localStorage.setItem('deposito', depositoo)
    if(numCart != 0 && numCod != 0 && numData != 0){
        if (idCod == 1){
            var ctr = 0
            if (ctr == 0){
                var saldo1 = 0
                saldo1 += depositoo
                localStorage.setItem('saldoo1', saldo1)
                ctr = 1
                localStorage.setItem('ctr1', ctr)
            }else{
                ctr = localStorage.getItem('ctr1')
                if(ctr == 1){
                    saldo1 += localStorage.setItem('saldoo1')
                    saldo1 += depositoo   
                } 
            }
            var ultDp1 = depositoo
            localStorage.setItem('saldoo1', saldo1)
            localStorage.setItem('ultDp1', ultDp1)
            alert('deposito efetivado')
            window.location.href="pagUsario.html"
        }
    }
}

