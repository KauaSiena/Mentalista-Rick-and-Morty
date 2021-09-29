var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "acertou";
    location.reload("page");
  }
  if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Você chutou alto demais";
  }
  if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Você chutou baixo demais";
  }
}