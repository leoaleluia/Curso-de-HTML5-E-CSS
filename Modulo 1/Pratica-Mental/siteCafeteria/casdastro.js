function cadastrar(){
    var txTnome = document.getElementById('nome')
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')


    if (login.value > 0) {
        window.location.href="pagCadastrado.html"
    }
    if(login.value == false){
        alert('Preencha o campo')
    }
}