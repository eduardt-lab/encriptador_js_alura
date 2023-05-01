function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munheco = document.getElementById("munheco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = "";
      tituloMensaje.textContent = "Texto listo para copiar";
      parrafo.textContent = textoCifrado;
      //parrafo.textContent = "";
      munheco.src = "./img/datos_encriptados.jpg";
    } else {
      munheco.src = "./img/imagen1.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo").textContent;
    let munheco = document.getElementById("munheco");
  
    let textoCifrado = parrafo
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (parrafo.length != 0) {
        document.getElementById("parrafo").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        texto.value = textoCifrado;
        munheco.src = "./img/datos_desencriptado.jpg";
      } else {
        munheco.src = "./img/imagen1.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  }

  function limpiar() {
    document.getElementById("texto").value = "";
    document.getElementById("titulo-mensaje").textContent = "Encriptador de Texto";
    document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    document.getElementById("munheco").src = "./img/imagen1.jpg";
  }

  function copiarTexto() {
    let parrafo = document.getElementById("parrafo");
    let textoCopiado = parrafo.innerText;

    navigator.clipboard.writeText(textoCopiado).then(()=> {
        swal("Texto copiado", textoCopiado, "success");
    }, () => {
        swall("Error", "No se pudo copiar el texto", "error")
    });
  }