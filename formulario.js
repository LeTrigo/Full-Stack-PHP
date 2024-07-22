function enviarFormulario() {
  let formulario = document.querySelector(".formulario");
  let datos = new FormData(formulario);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "formulario.php", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.querySelector(".resultado").innerHTML = xhr.responseText;
    }
  };

  xhr.send(datos);
  mostrarMensaje("Formulario enviado con exito!");
}

function mostrarMensaje() {
  let mensaje = document.querySelector(".mensaje");
  mensaje.innerHTML = mensaje;
}

let boton = button;
boton.addEventListener("click", enviarFormulario());
