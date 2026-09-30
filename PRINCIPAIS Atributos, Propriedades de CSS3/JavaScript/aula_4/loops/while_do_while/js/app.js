/*

A diferença entre o While e o Do While:
1- While
1.1 While verifica a condição antes de entrar no loop 
1.2 Tem um contador e variável de escape do loop

2-Do While
2.1 Primeiro executa o loop, depois testa
2.2 Usando quando se precisa executar o loop pelo menos uma vez
1.3 Escapa do loop apenas se a variável atender a condição


*/

/*
// While 
let num1 = 0
while(num1 <=5){
    console.log(`${num1+1}° rodada`)
    num1++  
}

*/

// exemplo 2 tabuada

let num1 = 0
numFixo = 2
while(num1 <=10){
    console.log(`${numFixo} x ${num1} = ${(numFixo * num1)}`)
    num1++

}

// Correção tabuada com Prompt

let numFixo = Number(prompt("Digite o número da tabuada que vc deseja: "))
let num0 = 0 
while(num0 <=10){
    console.log(`${numFixo} x ${num0} = ${(numFixo * num0)}`)
    num0++
}
