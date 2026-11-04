function precoPassagem() {
  let preco = 0;

  switch (destinoEscolhido.value) {
    case "alexandria":
      preco = 3200;
      break;
    case "babilonia":
      preco = 4900;
      break;
    case "atenas":
      preco = 4100;
      break;
  }

  const pessoas = Number(qntPessoas.value);
  const milhas = Number(qntMilhas.value);

  const precoFinal = preco * pessoas * (1 - 0.0005 * milhas);

  if (destinoEscolhido.value === "" || pessoas < 1) {
    labelPreco.textContent = "Preço final: escolha o destino e informe ao menos 1 pessoa";
  } else if (milhas <= 1000 && milhas >= 0) {
    labelPreco.textContent = "Preço final: " + precoFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  } else {
    labelPreco.textContent = "Preço final: quantidade de milhas inválida";
  }
}

const qntPessoas = document.getElementById("pessoas");
const qntMilhas = document.getElementById("milhas");
const destinoEscolhido = document.getElementById("destino");
const labelPreco = document.getElementById("preco-final");

qntPessoas.addEventListener("input", precoPassagem);
qntMilhas.addEventListener("input", precoPassagem);
destinoEscolhido.addEventListener("input", precoPassagem);
