/* 
operadores lógicos

&& -> (and/e) lógico
|| -> (or/ou) lógico
! -> (not/não) lógico

*/

// Exemplos simples

let num1 = 10
let num2 = 15 
let num3 = 2

console.log("Condições simples")


if(num1 >= num2) {
    console.log("Entrou no IF")
} else{

    console.log("(FALSO!)Não entou no IF") 
}

// Exemplo composto 

console.log("Condições Compostas")

if((num1 >= num2)  && (num1 != num3)){
    console.log("Entrou no IF")

} else{

    console.log("(FALSO!)Não entou no IF") 
}



// Exemplo com 3 condições

console.log("Condições Compostas 2")

if(((num1 >= num2)  && (num1 != num3) || (num1 != num3))){
    console.log("Entrou no IF")
    
} else{

    console.log("(FALSO!)Não entou no IF") 
}

// Condição simples negada

console.log("Condição simples negada")

if(!(num1 >= num2)) {
    console.log("Entrou no IF")
} else{

    console.log("(FALSO!)Não entou no IF") 
}
