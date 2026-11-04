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

  console.log(preco);
}

const qntPessoas = document.getElementById("pessoas");
const qntMilhas = document.getElementById("milhas");
const destinoEscolhido = document.getElementById("destino");

qntPessoas.addEventListener("input", precoPassagem);
qntMilhas.addEventListener("input", precoPassagem);
destinoEscolhido.addEventListener("input", precoPassagem);
