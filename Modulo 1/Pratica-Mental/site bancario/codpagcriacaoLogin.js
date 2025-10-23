function criar(){
    var txTnome = document.getElementById('nome')
    var txTidCod = document.getElementById('idCod')

    if(txTidCod.value == 1){
        localStorage.setItem('cod', txTidCod.value)
        localStorage.setItem('nome', txTnome)
    }else if (txTidCod.value == 2){
        localStorage.setItem('cod', txTidCod.value)
        localStorage.setItem('nome', txTnome)
    }else{
        localStorage.setItem('cod', txTidCod.value)
        localStorage.setItem('nome', txTnome)
    }
}