
const encrpitarBtn = document.getElementById("encript");
const decryptBtn = document.getElementById("decrypt");

const encriptar = (input) => {
    texto = [];
    for (n in input) {
        if (input[n] == "a")
            texto.push("ai");
        else if (input[n] == "e")
            texto.push("enter");
        else if (input[n] == "i")
            texto.push("imes");
        else if (input[n] == "o")
            texto.push("ober");
        else if (input[n] == "u")
            texto.push("ufat");
        else
            texto.push(input[n]);
    }
    return texto.join("");
}

const desencriptar = (input) => {
    texto = [];
    for (n = 0; n < input.length; n++) {
        if (input[n] == "a" && input[n + 1] == "i") {
            texto.push("a");
            n = n + 1;
        }
        else if (input[n] == "e" && input[n + 1] == "n" && input[n + 2] == "t" && input[n + 3] == "e" && input[n + 4] == "r") {
            texto.push("e");
            n = n + 4;
        }
        else if (input[n] == "i" && input[n + 1] == "m" && input[n + 2] == "e" && input[n + 3] == "s") {
            texto.push("i");
            n = n + 3;
        }
        else if (input[n] == "o" && input[n + 1] == "b" && input[n + 2] == "e" && input[n + 3] == "r") {
            texto.push("o");
            n = n + 3;
        }
        else if (input[n] == "u" && input[n + 1] == "f" && input[n + 2] == "a" && input[n + 3] == "t") {
            texto.push("u");
            n = n + 3;
        }
        else
            texto.push(input[n]);
    }
    return texto.join("");
}

encrpitarBtn.addEventListener("click", () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output__texto");
    if(validarInput(input)){
        texto = encriptar(input.value);
        output.innerHTML = texto;
    }else{
    }
});

decryptBtn.addEventListener("click", () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output__texto");

    texto = desencriptar(input.value);
    output.innerHTML = texto;
});

const validarInput = (input) =>{
    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
    var regex = /^[a-z0-9_\-]+$/;

    //Validate TextBox value against the Regex.
    var isValid = regex.test(input.value);
    if (!isValid) {
        alert("El texto contiene caracteres especiales o mayúsculas");
    }
    return isValid;
}
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/