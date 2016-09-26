window.addEventListener("load", function() {
    var boton = document.getElementById("crear");
    var termino = document.getElementById("termino");
    var concepto = document.getElementById("concepto");
    var cards = document.querySelectorAll(".cards");

    boton.addEventListener("click", function (){
    	var cardTermino = document.createElement("div");
    	var cardConcepto = document.createElement("div");
    	publicar(termino.value, concepto.value, cardTermino, cardConcepto);
 		termino.value = "";
 		concepto.value = "";
	});

	function publicar (termino, concepto, cardTermino, cardConcepto) {
 		cardTermino.classList.add("formatoCard");
 		cardConcepto.classList.add("formatoCard")
		cardTermino.innerHTML = termino;
		cardConcepto.innerHTML = concepto;
    	var card1 = document.getElementById("card1");
    	var card2 = document.getElementById("card2");
    	card1.insertBefore(cardTermino, card1.childNodes[0]);
    	card2.insertBefore(cardConcepto, card2.childNodes[1]);
	}

	cards.addEventListener("keydown", function () {
    	var cards = cards.value;
		boton.disabled = false;
		cardVacia (cards);
	});

	function cardVacia (termino) {
		var cantidadCaracteres = termino.value.length;

		if (termino.value == null || termino.length == 0 || termino.value === "" || /^\s+$/.test(termino.value)) {
			boton.disabled = true;
		}
	}

	termino.addEventListener("keyup", function (e) {
		var tecla = e.keyCode;
		heightTextArea(tecla);
	});

	function heightTextArea (tecla) {
        if (tecla == 13) {
            termino.rows++;
        } else if (tecla == 8) {
            termino.rows--;
        }
        if (termino.rows < 4) {
            termino.rows = 4;    
        }
    }


});