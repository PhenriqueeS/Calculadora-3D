const nome = prompt("Olá! Qual é o seu nome?");

document.getElementById("saudacao").innerHTML =
`Olá, <span style="color:#00FFD5">${nome}</span>!`;

function adicionar(valor){
    document.getElementById("display").value += valor;
}

function limpar(){
    document.getElementById("display").value = "";
}

function calcular(){

    const display = document.getElementById("display");

    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Erro";
    }

}