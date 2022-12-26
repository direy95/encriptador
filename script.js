
const encrpitarBtn = document.getElementById("encript");
const decryptBtn = document.getElementById("decrypt");

const encriptar = (input) => {
    texto = [];
    for (n in input) {
        if (input[n] == "a")
            texto[n] = "ai";
        else if (input[n] == "e")
            texto[n] = "enter";
        else if (input[n] == "i")
            texto[n] = "imes";
        else if (input[n] == "o")
            texto[n] = "ober";
        else if (input[n] == "u")
            texto[n] = "ufat";
        else
            texto[n] = input[n];
    }
    return texto.join("");
}

const desencriptar = (input) => {
    texto = [];
    for (n in input) {
        while (input(n + 5) != null) {
            if (input[n] == "a")
                texto[n] = "ai";
            else if (input[n] == "e")
                texto[n] = "enter";
            else if (input[n] == "i")
                texto[n] = "imes";
            else if (input[n] == "o")
                texto[n] = "ober";
            else if (input[n] == "u")
                texto[n] = "ufat";
            else
                texto[n] = input[n];
        }

    }
    return texto.join("");
}



encrpitarBtn.addEventListener("click", () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    texto = encriptar(input.value);
    output.value = texto;
});

decryptBtn.addEventListener("click", () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    texto = desencriptar(input.value);
    output.value = texto;
});


/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/