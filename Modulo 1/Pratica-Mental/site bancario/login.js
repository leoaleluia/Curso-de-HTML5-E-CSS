function login(){
    var txTnome = document.getElementById('idnome')
    var txTcod = document.getElementById('idcod')
    localStorage.setItem('txTnomeLogin', txTnome.value)
    localStorage.setItem('txTcodLogin', txTcod.value)

    window.location.href="pagUsario.html"
}