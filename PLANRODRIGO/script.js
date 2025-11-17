function guardarIngreso() {
  let valor = document.getElementById("ingreso").value;
  localStorage.setItem("ingreso", valor);
  document.getElementById("ingresoGuardado").innerText =
    "Guardado: Q" + valor;
}
