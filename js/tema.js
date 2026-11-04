const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "escuro") {
  document.documentElement.classList.add("tema-escuro");
}

function alternarTema() {
  const temaEscuroLigado = document.documentElement.classList.toggle("tema-escuro");

  if (temaEscuroLigado) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.removeItem("tema");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("botao-tema").addEventListener("click", alternarTema);
});
