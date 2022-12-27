let btnEncriptar = document.getElementById("encriptar")
btnEncriptar.onclick = comprobar

let btnDesencriptar = document.getElementById("desencriptar")
btnDesencriptar.onclick = comprobarDesencriptar

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
}

function desencriptar(){
    let textoInput = document.getElementById("input").value.toLowerCase()

    let desencriptado = textoInput.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")

    mostrarTexto()
    document.getElementById("textoEncriptado").innerText = desencriptado
}

function copiar(){
    let textoCopiado = document.getElementById("textoEncriptado")
    textoCopiado.select()
    document.execCommand("copy")
    borrarInput()
}

function borrarInput(){
    let input= document.getElementById("input")
    if (input.value !="") {
        input.value = ""
    }
}
function comprobar(){
    let textoInput = document.getElementById("input").value
    let expreg = /[A-ZÁÉÍÓÚáéíóúÑ]+/g

    if((textoInput === "")){
        document.getElementById("error").setAttribute("style", "display: block;");
        document.getElementById("vacio").setAttribute("style", "display: block;");
        setTimeout(() => {
            document.getElementById("error").setAttribute("style", "display: none;");
            document.getElementById("vacio").setAttribute("style", "display: none;");
            borrarInput()
        }, 2000);
    }else if(expreg.test(textoInput)){
        document.getElementById("error").setAttribute("style", "display: block;");
        document.getElementById("escribe").setAttribute("style", "display: block;");
        setTimeout(() => {
            document.getElementById("error").setAttribute("style", "display: none;");
            document.getElementById("escribe").setAttribute("style", "display: none;")
            borrarInput()
        }, 2000);
    }else {
        encriptar()
    }
}
function comprobarDesencriptar(){
    let textoInput = document.getElementById("input").value
    let expreg = /[A-ZÁÉÍÓÚáéíóúÑ]+/g

    if((textoInput === "")){
        document.getElementById("error").setAttribute("style", "display: block;");
        document.getElementById("vacio").setAttribute("style", "display: block;");
        setTimeout(() => {
            document.getElementById("error").setAttribute("style", "display: none;");
            document.getElementById("vacio").setAttribute("style", "display: none;");
            borrarInput()
        }, 2000);
    }else if(expreg.test(textoInput)){
        document.getElementById("error").setAttribute("style", "display: block;");
        document.getElementById("escribe").setAttribute("style", "display: block;");
        setTimeout(() => {
            document.getElementById("error").setAttribute("style", "display: none;");
            document.getElementById("escribe").setAttribute("style", "display: none;")
            borrarInput()
        }, 2000);
    }else {
        desencriptar()
    }

}
