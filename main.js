// Questão 1: 91


// Questão 2
function verificaFibonacci(num) {
    
    let a = 0;
    let b = 1;
    

    if (num === a || num === b) {
        return true;
    }
    
    
    while (b < num) {
        
        let temp = b;
        b = a + b;
        a = temp;
        
        
        if (b === num) {
            return true;
        }
    }
    
    
    return false;
}


function main() {
    const num = parseInt(prompt("Digite um número para verificar se pertence à sequência Fibonacci:"));
    
    if (verificaFibonacci(num)) {
        console.log(`O número ${num} pertence à sequência Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência Fibonacci.`);
    }
}

main()


// Questão  3:  a = +2, numero 9
//              b = 2 x n, numero 128
//              c = numeros naturais elevado ao quadrado, o próximo número é 49
//              d = quadrados dos números pares consecutivos, número 100
//              e = sequencia de fibonacci, número 13
//              f = Um padrão de aumento incremental de 2, 4, 1, 1, 1, 
//                  Um padrão de aumento significativo de 8, 2, 4,
//                  próximo número é 28

//Questão 4

// Ligaria o primeiro interruptor e esperaria um tempo até a lâmpada ficar quente, depois desligaria.
// Depois desligaria o primeiro interruptor e ligaria o segundo interruptor e entraria na sala.
// Se a lâmpada estiver acesa, então o segundo interruptor controla essa lâmpada.
// Se a lâmpada estiver apagada, mas ainda estiver quente ao toque, então o primeiro interruptor controla essa lâmpada.
// Se a lâmpada estiver apagada e fria ao toque, então o terceiro interruptor controla essa lâmpada.
// Com apenas duas visitas a sala das lâmpadas, daria pra determinar qual interruptor controla cada lâmpada.

// Questão 5

function inverterString(str) {
    let invertedString = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        
        invertedString += str[i];
    }
    return invertedString;
}


const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);