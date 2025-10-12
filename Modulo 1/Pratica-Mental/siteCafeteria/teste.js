function login(){
    var txTslogin = window.document.getElementById('login').value
    var txTssenha = window.document.getElementById('senha')
    var p3 = window.document.getElementById('p3')
    var senha = txTssenha.value
    var login = txTslogin.value
    localStorage.setItem('nome', txTslogin)

    if (txTslogin) {

        window.location.href="pagUsuario.html" //Usamos o window.location para poder abrir a pagina segunte ao clicar no evento, se as condições impostas forem satisfeitas
        }else {
            window.alert("Senha incorreta")
        }
                
             

}