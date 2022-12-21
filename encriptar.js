let btnEncriptar = document.getElementById("encriptar")
btnEncriptar.onclick = encriptar

let btnDesencriptar = document.getElementById("desencriptar")
btnDesencriptar.onclick = desencriptar

let btnCopiar = document.getElementById("copiar")
btnCopiar.onclick = copiar

function mostrarTexto(){
    document.getElementById("respuesta-imagen").setAttribute("style", "display: none;");
    document.getElementById("repuesta-encriptada").setAttribute("style", "display: flex;");
}
function encriptar(){
    let textoInput = document.getElementById("input").value.toLowerCase()
    let encriptado = textoInput.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")

    mostrarTexto()
    document.getElementById("textoEncriptado").innerText = encriptado
    console.log(`Encriptado ${encriptado}`)
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function desencriptar(){
    let textoInput = document.getElementById("input").value.toLowerCase()

    let desencriptado = textoInput.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")

    mostrarTexto()
    document.getElementById("textoEncriptado").innerText = desencriptado
    console.log(`Desencriptado ${desencriptado}`)
}

function copiar(){
    let textoCopiado = document.getElementById("textoEncriptado")
    textoCopiado.select()
    document.execCommand("copy")
    borrarInput()
}

function borrarInput(){
    let input= document.getElementById("input");
    if (input.value !="") {
        input.value = "";
    }
}

