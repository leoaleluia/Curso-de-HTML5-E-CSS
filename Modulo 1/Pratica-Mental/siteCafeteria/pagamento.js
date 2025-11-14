
    var valor = localStorage.getItem('valortot')
    var p1 = document.getElementById('p1')
    p1.innerText = `O valor total é de R$ ${valor} reais`
    var numCartao = document.getElementById('numCartao')
    var dataCart = document.getElementById('dataCartao')
    var numSeg = document.getElementById('numSeguranca')
    var pix = document.getElementById('pix2')


function proximo(){
    var pagamento = document.getElementsByName('pag')
    var div1 = document.getElementById('conteudoCart')
    var div2 = document.getElementById('pix')


    if(pagamento[2].checked){
        div2.style.visibility="visible"
        div1.style.visibility="hidden"
    }else{
        if (pagamento[0].checked || pagamento[1].checked){
            div1.style.visibility="visible"
            div2.style.visibility="hidden"
        }
    }
}
function finalizar(){

    if(numCartao.value && dataCart.value && numSeg.value){
        document.location.href="pagCompraFinalizada.html"
    }else{
        alert('Preencha todo o campo')
    }
}