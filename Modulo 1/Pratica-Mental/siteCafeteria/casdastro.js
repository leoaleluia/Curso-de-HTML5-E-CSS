function cadastrar(){
    var txTnome = document.getElementById('nome')
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')


    if (login.value >  0 && senha.value > 0 && txTnome.value != "" ) {
        window.location.href="pagCadastrado.html" //Usamos o window.location para poder abrir a pagina segunte ao clicar no evento, se as condições impostas forem satisfeitas
    }else{
        alert('Preencha todos os campos')
    }
}