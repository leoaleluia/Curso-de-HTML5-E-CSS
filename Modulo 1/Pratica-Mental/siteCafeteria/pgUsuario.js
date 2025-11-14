function pagamento(){
    var nome = localStorage.getItem('nome') //Usamos essa linha para recuperar o nome guardado na variável 'nome'
    var ctrCafe = document.getElementsByName('op1')
    var ctrAcp = document.getElementsByName('pc1')
    var total = 0
    
    if(ctrCafe[0].checked){
        if(ctrAcp[0].checked){
            total = 2 + 2.50
        }else if(ctrAcp[1].checked){
            total = 2 + 8
        }else if (ctrAcp[2].checked){
            total = 2 + 15
        }else{
            total = 2 + 35
        }
    }else if (ctrCafe[1].checked){
        if(ctrAcp[0].checked){
            total = 3.50 + 2.50
        }else if (ctrAcp[1].checked){
            total = 3.50 + 8
        }else if (ctrAcp[2].checked){
            total = 3.50 + 15
        }else{
            total = 3.50 + 35
        }
    }else if (ctrCafe[2].checked){
        if(ctrAcp[0].checked){
            total = 5 + 2.50
        }else if(ctrAcp[1].checked){
            total = 5 + 8
        }else if (ctrAcp[2].checked){
            total = 5 + 15
        }else{
            total = 5 + 35
        }
    }else{
        if (ctrAcp[0].checked){
            total = 7 + 2.50
        }else if (ctrAcp[1].checked){
            total = 7 + 8
        }else if (ctrAcp[2].checked){
            total = 7 + 15
        }else{
            total = 7 + 35
        }
    }
    localStorage.setItem('valortot', total) // Nome da variável e o valor que ela vai armazenar 
    if (total){
        window.location.href="pagPagamento.html"
    }

    

}