// PROGRAMA
var uno = ["enter","imes","ai","ober","ufat"];
var dos = [/e/g,/i/g,/a/g,/o/g,/u/g];
var one = ["e","i","a","o","u"];
var two = [/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];

var habilitado = false;
var mostrar = false;
var mostrarEncriptado;

function encriptar(){
    var capturaTexto = document.querySelector("#textoprincipal").value;
    var textoEncriptado = capturaTexto.replace(dos[0], uno[0]).replace(dos[1], uno[1]).replace(dos[2], uno[2]).replace(dos[3], uno[3]).replace(dos[4], uno[4]); 
    mostrarEncriptado = document.querySelector("#textoLateral").value = textoEncriptado;

    ocultar()
    habilitado = true;
}
function desencriptar(){ 
    var capturaTexto = document.querySelector("#textoprincipal").value; 
    var desencriptado = capturaTexto.replace(two[0], one[0]).replace(two[1], one[1]).replace(two[2], one[2]).replace(two[3], one[3]).replace(two[4], one[4]); 
    mostrarEncriptado = document.querySelector("#textoLateral").value = desencriptado;
    
    ocultar()
    habilitado = true;
}
function copiarTexto(){
    if(habilitado){
        navigator.clipboard.writeText(mostrarEncriptado)
        .catch(err => {
        console.log(err);
        })
    }
}
document.getElementById("segundomodelo").style.display = "none";

function ocultar(){
    var segundomodelo = document.getElementById("segundomodelo");
    var ocultado = document.getElementById("primermodelo");
    if (mostrarEncriptado) {
        ocultado.style.display = "none";
        segundomodelo.style.display = "block";
    }
}

var mostrarFooter = document.getElementById("footer");
mostrarFooter.style.display = "none";

function mostrarContacto(){
    if (mostrarFooter.style.display == "none"){
        mostrarFooter.style.display = "block";
    }
    else{
        mostrarFooter.style.display = "none";
    }
}

document.querySelector("#textoprincipal").focus();
document.querySelector("#button1").addEventListener("click", encriptar); 
document.querySelector("#button2").addEventListener("click", desencriptar);
document.querySelector("#buttonCopy").addEventListener("click", copiarTexto);
document.querySelector("#tarjetaContacto").addEventListener("click", mostrarContacto);

