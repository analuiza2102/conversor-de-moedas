//coletando a informação

function conversorMoeda() {
  //variaveis
  var cedula = document.getElementById("cedula").value;
  var cedula2 = document.getElementById("cedula2").value;
  //moedas
  if (cedula.toUpperCase() == "USD" && cedula2.toUpperCase() == "BRL") {
    var cotacao = 5.20;
    var sigla = "BRL";
  } else if (cedula.toUpperCase() == "BRL" && cedula2.toUpperCase() == "USD") {
    var cotacao = 0.19;
    var sigla = "USD";
  } else if (
    cedula.toUpperCase() == "GBP" &&
    cedula2.toUpperCase() == "USD"
  ) {
    var cotacao = 1.39;
    var sigla = "USD";
  } else if (
    cedula.toUpperCase() == "USD" &&
    cedula2.toUpperCase() == "GBP"
  ) {
    var cotacao = 0.72;
    var sigla = "GBP";
    
  } 
  else if (
    cedula.toUpperCase() == "BRL" &&
    cedula2.toUpperCase() == "GBP"
  ) {
    var cotacao = 0.13;
    var sigla = "GBP";
  }else if (
    cedula.toUpperCase() == "GBP" &&
    cedula2.toUpperCase() == "BRL"
  ) {
    var cotacao = 7.64;
    var sigla = "BRL";
  }else {
    document.getElementById("valorFinal").innerHTML = "Moeda desconhecida";
  }
  //conversão
  var valor1 = parseFloat(document.getElementById("converter").value);
  if (valor1 > 0) {
   var valorFinal = valor1 * cotacao;

    document.getElementById("valorFinal").innerHTML =
    valorFinal.toFixed(2) + " " + sigla;

  } else if (valor1 == 0) {
    document.getElementById("valorFinal").innerHTML =
      "insira um valor maior que 0";
  } else {
    document.getElementById("valorFinal").innerHTML =
      "insira um valor positivo";
  }
}