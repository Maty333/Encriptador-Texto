const textArea = document.querySelector(".textArea-textoEncriptado");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  mensaje.style.backgroundImage = "none";
  const textoAbajoImagen = document.querySelector(".texto-abajo-imagen");
  if (textoAbajoImagen) {
    textoAbajoImagen.remove();
  }
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(mensaje.value);
  textArea.value = textoDesencriptado;
  mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function copiar() {
  var textoCodigo = document.querySelector(".mensaje").value;
  navigator.clipboard
    .writeText(textoCodigo)
    .then(function () {
      alert("El texto se copió correctamente: " + textoCodigo);
    })
    .catch(function (error) {
      alert("Error al copiar el texto: " + error);
    });
}
// Validar entrada de texto
textArea.addEventListener("input", function () {
  const texto = textArea.value;
  const textoValido = texto.replace(/[^a-z0-9\s]/ig, "");
  textArea.value = textoValido;
});

mensaje.addEventListener("input", function () {
  const texto = mensaje.value;
  const textoValido = texto.replace(/[^a-z0-9\s]/ig, "");
  mensaje.value = textoValido;
});