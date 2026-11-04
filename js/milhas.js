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

  const precoFinal = preco*pessoas*(1-(0.0005*milhas));
  console.log(precoFinal);
}

const qntPessoas = document.getElementById("pessoas");
const qntMilhas = document.getElementById("milhas");
const destinoEscolhido = document.getElementById("destino");

qntPessoas.addEventListener("input", precoPassagem);
qntMilhas.addEventListener("input", precoPassagem);
destinoEscolhido.addEventListener("input", precoPassagem);
