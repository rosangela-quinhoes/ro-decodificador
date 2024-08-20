document.addEventListener("DOMContentLoaded", function() {
      // Esconder o textarea de output inicialmente
document.getElementById("output-texto").classList.add("hidden");
document.getElementById("botao-copiar").classList.add("hidden");
});
  
let textArea = document.querySelector(".container__input");
let textodireita = document.querySelector(".texto-direita");

function encryptText() {
      const textoEncriptado = encriptar(textArea.value);

      textodireita.textContent = textoEncriptado;
      textArea = ''; 
}

function encriptar(stringOriginal) {
      let substitutionMap = 
        [['a' , 'ai'] , ['e' , 'enter'] , ['i' , 'imes'] , ['o' , 'ober'] , ['u' , 'ufat']];
      
      stringOriginal = stringOriginal.toLowerCase();
      let stringEncriptada = '';

      for (let char of stringOriginal) {
           let vogal = false;
           for (let [caracter, codigo] of substitutionMap) {
                if (char === caracter) {
                    stringEncriptada += codigo;
                    vogal = true;
                    break;
                }
            }
            if (!vogal) {
                stringEncriptada += char;
            }
      }

     document.getElementById("output-texto").value = stringEncriptada;
     document.getElementById("output-texto").classList.remove("hidden");
     document.getElementById("botao-copiar").classList.remove("hidden");
     document.getElementById("container__imagem").classList.add("hidden");

}

let textAreaDescrip = document.querySelector(".container__input");
let textodireitaDescrip = document.querySelector(".texto-direita");


function desencryptText() {
      const textoDesencriptado = desencriptar(textAreaDescrip.value);
      textodireitaDescrip.textContent = textoDesencriptado;
      textAreaDescrip = ''; 
}
      

function desencriptar(stringEncriptada) {
      let substitutionMap = [
          ['ai', 'a'],
          ['enter', 'e'],
          ['imes', 'i'],
          ['ober', 'o'],
          ['ufat', 'u']
      ];
  
      stringEncriptada = stringEncriptada.toLowerCase();
      let stringOriginal = "";
      let i = 0;
  
      while (i < stringEncriptada.length) {
          let codigoEncontrado = false;
  
          for (let [codigo, caracter] of substitutionMap) {
              if (stringEncriptada.startsWith(codigo, i)) {
                  stringOriginal += caracter;
                  i += codigo.length; 
                  codigoEncontrado = true;
                  break;
              }
          }
  
          if (!codigoEncontrado) {
              stringOriginal += stringEncriptada[i];
              i++; 
          }
      }
 
   
      document.getElementById("output-texto").value = stringOriginal;
      document.getElementById("output-texto").classList.remove("hidden");
      document.getElementById("botao-copiar").classList.remove("hidden");
      document.getElementById("container__imagem").classList.add("hidden");

}


// Função para copiar o texto para a área de transferência
function copiartexto() {
      let outputText = document.getElementById("output-texto");
      outputText.select();
      navigator.clipboard.writeText(outputText.value)
  }
        

