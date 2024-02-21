function calcularCalorias() {
  var refrigerante = document.getElementById('refrigerante').value.toLowerCase();
  var calorias = 0;
  var mensagem = '';

  
  switch (refrigerante) {
    case 'coca-cola':
      calorias = 38;
      break;
    case 'pepsi':
      calorias = 94;
      break;
    case 'sprite':
      calorias = 39;
      break;
    case 'fanta':
      calorias = 80;
      break;
    case 'kuat':
      calorias = 85;
      break;
    case 'H2OH':
      calorias = 0;
      break;
    case 'guarana':
      calorias = 80;
      break;
    case 'sukita':
      calorias = 109;
      break;
    case 'guarapan':
      calorias = 63;
      break;
    case 'matecouro':
      calorias = 83;
      break;
    case 'schweppes':
      calorias = 170;
      break
    
    case 'itubaina':
      calorias = 141;
      break


    default:
      calorias = 'Não foi possível calcular as calorias para este refrigerante. Obs: Caso seja H2OH está tranquilo pois ele não tem nenhuma caloria';
     
  }

  if (typeof calorias === 'number') {
    mensagem = `O refrigerante ${refrigerante} tem ${calorias} calorias. `;

    
    if (calorias < 200) {
      mensagem += 'Vamos parar de tomar o refrigerante, meu amigo ou minha amiga, porque vai ser difícil queimar essas calorias depois.';
    }
  } else {
    mensagem = calorias; 
  }

 
  var resultadoElement = document.getElementById('resultado');
  resultadoElement.innerText = mensagem;

  if (calorias > 0 && calorias < 100) {
    resultadoElement.style.color = 'black'; 
  } else if (calorias > 100) {
    resultadoElement.style.color = 'red'; 
  } else {
    resultadoElement.style.color = ''; 
  }
}

function voltarAoInicio() {
  
  window.location.href = "index.html";
}
