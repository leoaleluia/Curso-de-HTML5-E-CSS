
    var nomeLogin = localStorage.getItem('txTnomeLogin')
    var nomeUsuario = document.getElementById('pNome')
    var ultimoDp = document.getElementById('pUltiDp')
    var ultimoSq = document.getElementById('pUltiSq')
    var controleSaque = 0
    var controleDeposito = 0
    var saldo = 0
    
    function deposito(){
    window.location.href="pagDeposito.html"
    controleDeposito = 1
    }
    function saque(){
    window.location.href="pagSaque.html"
    controleSaque = 1
    }
    function status(){
        var nomeLogin = localStorage.getItem('txTnomeLogin')
        var idCod = localStorage.getItem('txTcodLogin')
        var saldo = document.getElementById('pSaldo')
        if(idCod == 1){
            var saldoCod1 = localStorage.getItem('saldoo1')
            var ctr = 0
            if (ctr == 0) {
                if(ctr > 0){
                    saldotot += saldoCod1
                }
                var saldotot = saldoCod1
                ctr++
                localStorage.setItem('ctr1', ctr)
                ctr = localStorage.getItem('ctr1')
            }
            nomeUsuario.innerText = `Bem vindo ${nomeLogin}`
            saldo.innerText = `Seu saldo é ${saldotot}`

        }else if(idCod == 2){
            
        }else{
            
        }
       
    }
    controleDeposito = 0
    controleSaque = 0
