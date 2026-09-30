alert("Bem vindos a aula de switch case")

let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))


let escola = Number(prompt("Digite 1 para soma e 2 para multiplicação"))


switch(escola){
    case 1:
        let soma = num1 + num2
        console.log(`Voce escolheu soma. O valor da soma é: ${soma}`)
        break 
        case 2 :
            let mult = num1 * num2
            console.log(`Voce escolheu multiplicação. O valor dpo produto é: ${mult}`)
            break
            default:
                console.log("ERRO! escolha inválida")


}

