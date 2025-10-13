function proximo(){
    var pagamento = document.getElementsByName('pag')
    var div1 = document.getElementById('conteudoCart')
    var div2 = document.getElementById('pix')
    div1.style.display= 'block'
    div2.style.display = 'block'
    if(pagamento[0].checked || pagamento[1].checked){
        div1.style.display = 'none'
    }else{
        if (pagamento[2].checked){
            div2.style.display = 'none'
        }
    }
}