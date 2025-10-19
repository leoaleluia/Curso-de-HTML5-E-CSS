function criar(){
    var txTnome = document.getElementById('nome')
    var txTidCod = document.getElementById('idCod')

    if(txTidCod.value == 1){
        localStorage.setItem('cod1', txTidCod.value)
        alert('valor 1')
    }else if (txTidCod.value == 2){
        localStorage.setItem('cod2', txTidCod.value)
        alert('valor 2')
    }else{
        localStorage.setItem('cod3', txTidCod.value)
        alert('valor 3')
    }
    
}