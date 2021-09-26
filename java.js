function calcular(){
    var n1 = window.document.getElementById('num1')
    var n2 = window.document.getElementById('num2')
    var res = window.document.getElementById('res')

    let nu1 = Number(n1.value)
    let nu2 = Number(n2.value)
    let soma = nu1 + nu2
    res.innerHTML= `${soma}`


    if(soma == 0){
        alert('Digite um valor')
    }
}