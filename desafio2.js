function imc(alt,kg){
    calculoIMC=  kg/ (alt*alt)
}


function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);



  function conversor(valor){
    return valor*4,80

  }

  let valorConvertido = conversor(10)
  console.log(valorConvertido)


  function converterDolarParaReal(valorEmDolar) {
    // Define a taxa de câmbio para o dólar
    let cotacaoDolar = 4.80;
  
    // Calcula o valor equivalente em reais multiplicando o valor em dólares pela taxa de câmbio
    let valorEmReais = valorEmDolar * cotacaoDolar;
  
    // Retorna o valor equivalente em reais com duas casas decimais usando toFixed
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  
  // Exibe o resultado no console
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
  