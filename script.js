// REGRA 1
window.onload = function () {
    alert("Caixa Eletrônico Pronto. Insira seus dados.");
};

// REGRA 2
document.addEventListener("keydown", function () {
    console.log("Detectando digitação segura...");
});

document.addEventListener("keyup", function () {
    console.log("Detectando digitação segura...");
});

// REGRA 3
document.getElementById("confirmar").onclick = function () {
    alert("Processando transação... Por favor, aguarde.");
};

// REGRA 4
window.onbeforeunload = function (event) {
    event.preventDefault();
    event.returnValue = "";
};