function calculateSalary(salario, vendas){
    for(let i=0; i<vendas.length; i++){
        if(vendas[i]<=1200){
            let comissao=3/100*vendas[i]
            salario+=comissao
        }else{
            let comissao=5/100*vendas[i]
            salario+=comissao
        }
    }
    return salario
}
console.log(calculateSalary(1500,[1057,2000,981]))
console.log("-------------------------------------")
function calculateStock(qatual, qmin, qmax){
    let qmed=(qmax+qmin)/2
    if(qatual>=qmed)
        return "Não efetuar compra"
    else
        return "Efetuar compra"
}
console.log(calculateStock(5,20,10))
console.log("-------------------------------------")
function calculateAge(anoNasc,anoAtual){
    let ano=anoAtual-anoNasc
    let mes=ano*12
    let dia=ano*365
    let semana=ano*52.143
    return `A sua idade atualmente é: ${ano} anos
A sua idade em meses é: ${mes}
A sua idade em dias é: ${dia}
A sua idade em semanas é aproximadamente: ${semana}`
}
console.log(calculateAge(2002,2021))
console.log("-------------------------------------")
function getDiagonal(matriz){
    diagonal=[]
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(i===j) diagonal.push(matriz[i][j])    
        }
    }
    return diagonal
}
console.log(getDiagonal([[1,2,3],[4,5,6],[7,8,9]]))
console.log("-------------------------------------")
function cashMachine(r){
    let nota100
    let nota50
    let nota20
    let nota10
    let nota5
    let nota2
    let nota1
    let output = ''
    if(r>=100){
        nota100=Math.trunc(r/100)
        r%=100
        output += `${nota100} nota(s) de R$ 100\n`
    }
    if(r>=50){
        nota50=Math.trunc(r/50)
        r%=50
        output += `${nota50} nota(s) de R$ 50\n`
    }
    if(r>=20){
        nota20=Math.trunc(r/20)
        r%=20
        output += `${nota20} nota(s) de R$ 20\n`
    }
    if(r>=10){
        nota10=Math.trunc(r/10)
        r%=10
        output += `${nota10} nota(s) de R$ 10\n`
    }
    if(r>=5){
        nota5=Math.trunc(r/5)
        r%=5
        output += `${nota5} nota(s) de R$ 5\n`
    }
    if(r>=2){
        nota2=Math.trunc(r/2)
        r%=2
        output += `${nota2} nota(s) de R$ 2\n`
    }
    if(r==1){
        nota1=1
        r%=1
        output += `${nota1} nota(s) de R$ 1\n`
    }
    return output
}
console.log(cashMachine(70));
