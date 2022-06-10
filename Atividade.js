var listaDePecas = ["Bateria", "Pneu", "Disco de Freio"]
if (listaDePecas.length < 100){
    console.log("É possível adicionar peças");
}
else{
    console.log("Capacidade Insuficiente");
}

let peso = 50
if (peso < 100){
    console.log("A peça deve ter no mínimo 100g");
}
else{
    console.log("A peça possui o peso adequado");
}

let nomepeca = "Bateria"
if (nomepeca.length >= 3){
    console.log("Nome da peça adequado para o cadastro");
}
else if (nomepeca.length == 0){
    console.log("O nome da peça está vazio");
}
else if (nomepeca.length < 3){
    console.log("O nome deve conter ao menos 3 caracteres");
}