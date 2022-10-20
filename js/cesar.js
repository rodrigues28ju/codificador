/*tratamento para nao entrar com numeros e caracteres especias*/
const form = document.querySelector("#form");

form.addEventListener("keypress",function(e) {
    if(!checkChar(e)){
        e.preventDefault();
    }
   // limpar();
}
);
function checkChar(e) {
    const char =String.fromCharCode(e.keyCode);
    const pattern ='[a-zA-Z ]'; // regex 
    
    if(char.match(pattern)){
        //console.log(char);
        return true;
    }
};



const  past = document.querySelector("#frase");

past.addEventListener('paste',function () {
    const regex = new RegExp("^[a-zA-Z\b]+$");
    const self = this;

    setTimeout(function() {
        const texto =self.value;
        if(!regex.test(texto)){
            self.value =" ";
        }
    });
    
});


/* funçao  de codificar inspirada na cifra de cesar*/

var botaoCripto = document.querySelector("#cody");
botaoCripto.addEventListener("click", function(event) {
  event.preventDefault();

  var input = document.querySelector(".principal");
  var texto = input.value;

  function criptografar() {

    var textoModificado = texto.replace(/[\e\é\ê]/gi, "fgh").replace(/[\i\í]/gi, "jkl").replace(/[\a\á\à\â\ã]/gi, "def").replace(/[\o\ó\ô\õ]/gi, "pqr").replace(/[\u\ú]/gi, "vwx");
    var resultadoTexto = document.querySelector(".mensagem");
    resultadoTexto.value = textoModificado;
  }

  criptografar();
  input.value = "";
});



/*funçao de descriptografar o que foi codificar/*/

var botaoDescrito = document.querySelector("#decody");
    botaoDescrito.addEventListener("click", function(event) {
    event.preventDefault();

var input = document.querySelector(".principal");
var texto = input.value;
var textoNãoModificado = texto.replace(/fgh/gi,"e").replace(/jkl/gi,"i").replace(/def/gi,"a").replace(/pqr/gi,"o").replace(/vwx/gi,"u");

    function descriptografar() {
      
                var resultadoTexto = document.querySelector(".mensagem");
                    resultadoTexto.value = textoNãoModificado;
    }
                    
             if(texto!=textoNãoModificado) {
                          descriptografar();
                          input.value = "";

                      }
             
    });

    

